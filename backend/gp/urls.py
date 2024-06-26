from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import GPViewSet
from . import views

router = DefaultRouter()
router.register('', GPViewSet)


urlpatterns = [
    path('', include(router.urls)),
]