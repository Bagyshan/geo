from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import AchievementsViewSet


router = DefaultRouter()
router.register('', AchievementsViewSet)

urlpatterns = [
    path('', include(router.urls)),
]