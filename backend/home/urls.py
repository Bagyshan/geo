from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import HomeViewSet

router = DefaultRouter()
router.register('', HomeViewSet)

urlpatterns = [
    path('', include(router.urls)),
]