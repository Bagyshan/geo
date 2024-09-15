from rest_framework.response import Response
from rest_framework import viewsets
from .models import AboutCompany
from .serializers import AboutCompanySerializer
from rest_framework import permissions


class AboutCompanyViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = AboutCompany.objects.all()
    serializer_class = AboutCompanySerializer

    def get_permissions(self):
        if self.request.method in ['PATCH', 'PUT', 'DELETE', 'POST']:
            return [permissions.IsAdminUser()]
        return [permissions.AllowAny()]