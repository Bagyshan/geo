from rest_framework import viewsets
from .models import Vacancies
from .serializers import VacanciesSerializer


class VacanciesViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Vacancies.objects.all()
    serializer_class = VacanciesSerializer