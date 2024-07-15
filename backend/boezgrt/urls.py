from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import BoezgrtHomeViewSet, ProductsViewSet

router = DefaultRouter()
router.register(r'home', BoezgrtHomeViewSet)
router.register(r'products', ProductsViewSet)

urlpatterns = [
    path('', include(router.urls)),
]