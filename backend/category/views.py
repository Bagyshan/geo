from rest_framework.response import Response
from rest_framework import viewsets
from .models import Category
from .serializers import CategorySerializer
from rest_framework.decorators import action
from drf_yasg.utils import swagger_auto_schema
from comments.serializers import CommentSerializer
from rest_framework import status
from comments.tasks import send_comment_notification
from django.views.decorators.csrf import csrf_exempt



class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer