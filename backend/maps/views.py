from requests import Response
from rest_framework import viewsets
from .models import Maps, NewMaps
from .serializers import MapsSerializer, NewMapsSerializer
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
from django.contrib.gis.geos import GEOSGeometry
from rest_framework import viewsets, status

from django.shortcuts import render
from django_admin_geomap import geomap_context


class MapsViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Maps.objects.all()
    serializer_class = MapsSerializer


class NewMapsViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = NewMaps.objects.all()
    serializer_class = NewMapsSerializer


    # def create(self, request, *args, **kwargs):
    #     data = request.data

    #     # Создание сериализатора с полученными данными
    #     serializer = self.get_serializer(data=data)

    #     # Валидация данных
    #     serializer.is_valid(raise_exception=True)

    #     # Получение точки из данных и преобразование в координаты
    #     location = serializer.validated_data.get('location')
    #     if location:
    #         point = GEOSGeometry(location)
    #         coordinates = [point.x, point.y]
    #         print(coordinates, '========================================================')

    #         # Обновление данных координат
    #         serializer.validated_data['location'] = point

    #     # Сохранение данных (создание нового объекта)
    #     self.perform_create(serializer)

    #     # Создание ответа с данными созданного объекта и статусом 201
    #     headers = self.get_success_headers(serializer.data)
    #     return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    # def perform_create(self, serializer):
    #     data = self.request.data
    #     point = GEOSGeometry(data['location'])
    #     coordinates = [point.x, point.y]
    #     data['coordinates'] = coordinates
    #     serializer.save()


    # def create(self, request, *args, **kwargs):
    #     data = request.data
    #     serializer = self.serializer_class(data=data)

    #     # Преобразование строки с координатами в массив чисел
    #     if 'location' in serializer:
    #         try:
    #             location = data['location']
    #             point = GEOSGeometry(location)
    #             coordinates = [point.x, point.y]
    #             data['coordinates'] = coordinates
    #         except ValueError:
    #             return Response({"error": "Invalid coordinates format"}, status=status.HTTP_400_BAD_REQUEST)

    #     serializer = self.get_serializer(data=data)
    #     serializer.is_valid(raise_exception=True)
    #     self.perform_create(serializer)
    #     headers = self.get_success_headers(serializer.data)
    #     return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    # def perform_create(self, serializer):
    #     print('===============================================')
    #     serializer.save()

    # def get_success_headers(self, data):
    #     try:
    #         return {'Location': str(data[api_settings.URL_FIELD_NAME])}
    #     except (TypeError, KeyError):
