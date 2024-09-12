from rest_framework import viewsets
from .models import Investors
from .serializers import InvestorsSerializer
from rest_framework import permissions


class InvestorsViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Investors.objects.all()
    serializer_class = InvestorsSerializer

    def get_permissions(self):
        if self.request.method in ['PATCH', 'PUT', 'DELETE', 'POST']:
            return [permissions.IsAdminUser()]
        return [permissions.AllowAny()]