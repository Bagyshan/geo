from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import MapsViewSet, NewMapsViewSet

router = DefaultRouter()
router.register('maps', MapsViewSet)
router.register('newmaps', NewMapsViewSet)

urlpatterns = [
    path('', include(router.urls)),
]