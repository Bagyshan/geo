from rest_framework import viewsets
from .models import GP
from .serializers import GPSerializer
from rest_framework import permissions


class GPViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = GP.objects.all()
    serializer_class = GPSerializer

    def get_permissions(self):
        if self.request.method in ['PATCH', 'PUT', 'DELETE', 'POST']:
            return [permissions.IsAdminUser()]
        return [permissions.AllowAny()]
