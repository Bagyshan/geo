from rest_framework import viewsets
from .models import Allocation, MonthlyIncome
from .serializers import AllocationSerializer, MonthlyIncomeSerializer

class AllocationViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Allocation.objects.all()
    serializer_class = AllocationSerializer


class MonthlyIncomeViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = MonthlyIncome.objects.all()
    serializer_class = MonthlyIncomeSerializer


from django.shortcuts import render
from django.contrib.admin.views.decorators import staff_member_required
from .models import MonthlyIncome

@staff_member_required
def income_chart_view(request):
    data = MonthlyIncome.objects.all()
    return render(request, 'admin/income_chart.html', {'data': data})