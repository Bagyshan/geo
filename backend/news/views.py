from rest_framework.response import Response
from rest_framework import viewsets
from .models import News
from .serializers import NewsSerializer
from rest_framework.decorators import action
from drf_yasg.utils import swagger_auto_schema
from comments.serializers import CommentSerializer
from rest_framework import status
from comments.tasks import send_comment_notification
from django.views.decorators.csrf import csrf_exempt, csrf_protect
from rest_framework import permissions



class NewsViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = News.objects.all()
    serializer_class = NewsSerializer

    def get_permissions(self):
        if self.request.method in ['PATCH', 'PUT', 'DELETE', 'POST']:
            return [permissions.IsAdminUser()]
        return [permissions.AllowAny()]

    @csrf_exempt
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