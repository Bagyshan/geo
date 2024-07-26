from rest_framework import viewsets
from .models import BoezgrtHome, Products, Currency
from .serializers import BoezgrtHomeSerializer, ProductsSerializer, CurrencySerializer



class BoezgrtHomeViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = BoezgrtHome.objects.all()
    serializer_class = BoezgrtHomeSerializer


class ProductsViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Products.objects.all()
    serializer_class = ProductsSerializer


class CurrencyViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Currency.objects.all()
    serializer_class = CurrencySerializer
