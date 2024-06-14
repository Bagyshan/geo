from rest_framework.response import Response
from rest_framework import viewsets
from .models import News
from .serializers import NewsSerializer
from django.http import FileResponse, Http404, HttpResponse, JsonResponse
from rest_framework.decorators import action
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
from ckeditor_uploader.views import ImageUploadView
import os
from django.conf import settings
import logging
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_protect
from drf_yasg.utils import swagger_auto_schema
from django.utils.translation import gettext as _
from comments.serializers import CommentSerializer
from rest_framework import status
from comments.tasks import send_comment_notification



class NewsViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = News.objects.all()
    serializer_class = NewsSerializer

    @swagger_auto_schema(method='POST', request_body=CommentSerializer, operation_description='add comment for news')
    @action(detail=True, methods=['POST'])
    def comment(self, request, pk=None):
        news = self.get_object()
        serializer = CommentSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        # serializer.save(news=news)
        comment = serializer.save(news=news)

        send_comment_notification.delay(comment.id)
        return Response({'message': 'успешно добавлено'}, status=status.HTTP_201_CREATED)