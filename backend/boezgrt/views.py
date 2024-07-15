from rest_framework import viewsets
from .models import BoezgrtHome, Products
from .serializers import BoezgrtHomeSerializer, ProductsSerializer



class BoezgrtHomeViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = BoezgrtHome.objects.all()
    serializer_class = BoezgrtHomeSerializer


class ProductsViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Products.objects.all()
    serializer_class = ProductsSerializer
