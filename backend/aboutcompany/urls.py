from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import AboutCompanyViewSet


router = DefaultRouter()
router.register('', AboutCompanyViewSet)

urlpatterns = [
    path('', include(router.urls)),
]