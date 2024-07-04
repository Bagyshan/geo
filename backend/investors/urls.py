from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import InvestorsViewSet
from . import views

router = DefaultRouter()
router.register('', InvestorsViewSet)


urlpatterns = [
    path('', include(router.urls)),
]