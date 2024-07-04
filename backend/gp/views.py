from rest_framework.response import Response
from rest_framework import viewsets
from .models import GP
from .serializers import GPSerializer
from rest_framework.decorators import action
from drf_yasg.utils import swagger_auto_schema
from comments.serializers import CommentSerializer
from rest_framework import status
from comments.tasks import send_comment_notification



class GPViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = GP.objects.all()
    serializer_class = GPSerializer

