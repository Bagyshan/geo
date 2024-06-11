from requests import Response
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


class NewsViewSet(viewsets.ModelViewSet):
    queryset = News.objects.all()
    serializer_class = NewsSerializer

    # def list(self, request):
    #     news = self.queryset
    #     serialized_news = self.serializer_class(news, many=True)

    #     for item in serialized_news.data:
    #         item['title'] = _(item['title'])

    #     return Response(serialized_news.data)
    
# def news_locale():
#     news = News.__name__
#     return _(news)