from rest_framework.routers import DefaultRouter
from django.urls import path, include
from . import views




# router = DefaultRouter()
# router.register(r'', views.UploadImage, basename='upload_image')

# urlpatterns = [
#     path('', include(router.urls)),
# ]

urlpatterns = [
    path('upload_image/', views.upload_image, name='upload_image'),
]