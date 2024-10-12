from django.shortcuts import render
from rest_framework import viewsets
from .models import Home
from .serializers import HomeSerializer
from rest_framework import permissions


class HomeViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Home.objects.all()
    serializer_class = HomeSerializer

    def get_permissions(self):
        if self.request.method in ['PATCH', 'PUT', 'DELETE', 'POST']:
            return [permissions.IsAdminUser()]
        return [permissions.AllowAny()]
