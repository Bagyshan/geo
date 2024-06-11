from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import NewsViewSet
from . import views

router = DefaultRouter()
router.register('', NewsViewSet)


urlpatterns = [
    path('news/', include(router.urls)),
]
