from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import BoezgrtHomeViewSet, ProductsViewSet, CurrencyViewSet

router = DefaultRouter()
router.register(r'home', BoezgrtHomeViewSet)
router.register(r'products', ProductsViewSet)
router.register(r'currency', CurrencyViewSet)

urlpatterns = [
    path('', include(router.urls)),
]