from django.shortcuts import render
from requests import Response
from rest_framework import viewsets
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

# Create your views here.

@csrf_exempt
def upload_image(request):
    print('==================================================')
    if request.method != 'POST':
        return JsonResponse({'Error Message': 'Wrong request'}, status=400)
    
    file_obj = request.FILES.get('file')
    if not file_obj:
        return JsonResponse({'Error Message': 'No file provided'}, status=400)

    file_name_suffix = file_obj.name.split('.')[-1]
    if file_name_suffix not in ['jpg', 'png', 'gif', 'jpeg']:
        return JsonResponse({'Error Message': 'Wrong request suffix'}, status=400)
    
    file_path = os.path.join(settings.MEDIA_ROOT, 'text_images', file_obj.name)
    print(file_path)

    try:
        with open(file_path, 'wb+') as file:
            for chunk in file_obj.chunks():
                file.write(chunk)
    except Exception as e:
        return JsonResponse({'Error Message': str(e)}, status=500)
    return JsonResponse({
        'Message': 'Image upload successfully',
        'location': os.path.join(settings.MEDIA_URL, 'text_images', file_obj.name)
    })
