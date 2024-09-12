from rest_framework import viewsets
from .models import Allocation, MonthlyIncome
from .serializers import AllocationSerializer, MonthlyIncomeSerializer
from rest_framework import permissions


class AllocationViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Allocation.objects.all()
    serializer_class = AllocationSerializer

    def get_permissions(self):
        if self.request.method in ['PATCH', 'PUT', 'DELETE', 'POST']:
            return [permissions.IsAdminUser()]
        return [permissions.AllowAny()]


class MonthlyIncomeViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = MonthlyIncome.objects.all()
    serializer_class = MonthlyIncomeSerializer

    def get_permissions(self):
        if self.request.method in ['PATCH', 'PUT', 'DELETE', 'POST']:
            return [permissions.IsAdminUser()]
        return [permissions.AllowAny()]


from django.shortcuts import render
from django.contrib.admin.views.decorators import staff_member_required
from .models import MonthlyIncome

@staff_member_required
def income_chart_view(request):
    data = MonthlyIncome.objects.all()
    return render(request, 'admin/income_chart.html', {'data': data})