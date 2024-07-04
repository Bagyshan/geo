from rest_framework import viewsets
from .models import Employees
from .serializers import EmployeesSerializer



class EmployeesViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Employees.objects.all()
    serializer_class = EmployeesSerializer