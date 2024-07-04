from django.shortcuts import render
from rest_framework import viewsets
from .models import Home
from .serializers import HomeSerializer


class HomeViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Home.objects.all()
    serializer_class = HomeSerializer
