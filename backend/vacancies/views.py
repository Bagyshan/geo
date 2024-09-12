from rest_framework import viewsets
from .models import Vacancies
from .serializers import VacanciesSerializer
from rest_framework import permissions


class VacanciesViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Vacancies.objects.all()
    serializer_class = VacanciesSerializer

    def get_permissions(self):
        if self.request.method in ['PATCH', 'PUT', 'DELETE', 'POST']:
            return [permissions.IsAdminUser()]
        return [permissions.AllowAny()]