from django.shortcuts import render
from rest_framework import permissions
from rest_framework.viewsets import ModelViewSet
from .serializers import CommentSerializer
from .models import Comment
from rest_framework.filters import SearchFilter
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.pagination import PageNumberPagination
from rest_framework.decorators import action
from rest_framework.response import Response
from news.models import News
from rest_framework import status
from .tasks import send_comment_notification
from django.views.decorators.csrf import csrf_exempt


class StandartResultPagination(PageNumberPagination):
    page_size = 1
    page_query_param = 'page'

class CommentViewSet(ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

    @action(detail=False, methods=['GET'])
    def get_user_comments(self, request):
        news_comments = Comment.objects.filter(news=request.news)
        serializer = CommentSerializer(news_comments, many=True)
        return Response(serializer.data)
    
    @csrf_exempt
    def create(self, request, *args, **kwargs):
        news_id = kwargs.get('news_id')
        news = News.objects.get(id=news_id)
        data = request.data.copy()
        data['news'] = news.id
        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
    
    @csrf_exempt
    def perform_create(self, serializer):

        comment = serializer.save()
        serializer.save()

        send_comment_notification.delay(comment.id)