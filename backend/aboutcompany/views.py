from rest_framework.response import Response
from rest_framework import viewsets
from .models import AboutCompany
from .serializers import AboutCompanySerializer


class AboutCompanyViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = AboutCompany.objects.all()
    serializer_class = AboutCompanySerializer