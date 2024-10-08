from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import VacanciesViewSet
from . import views

router = DefaultRouter()
router.register('', VacanciesViewSet)


urlpatterns = [
    path('', include(router.urls)),
]