from rest_framework import viewsets
from .models import Investors
from .serializers import InvestorsSerializer


class InvestorsViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Investors.objects.all()
    serializer_class = InvestorsSerializer