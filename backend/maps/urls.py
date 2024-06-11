from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import MapsViewSet
from . import views

router = DefaultRouter()
router.register('', MapsViewSet)

urlpatterns = [
    path('', include(router.urls)),
]