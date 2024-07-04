# from django.contrib import admin
# from django.urls import path
# from django.http import JsonResponse
# from django.template.response import TemplateResponse
# from .models import SalesData

# class SalesDataAdmin(admin.ModelAdmin):
#     change_list_template = "admin/charts/salesdata_change_list.html"
    
#     def changelist_view(self, request, extra_context=None):
#         as_json = request.GET.get('as_json')
#         if as_json:
#             data = list(SalesData.objects.values())
#             return JsonResponse(data, safe=False)
#         extra_context = extra_context or {}
#         return super().changelist_view(request, extra_context=extra_context)

# admin.site.register(SalesData, SalesDataAdmin)



# from django.contrib import admin
# from django.urls import path
# from django.http import JsonResponse
# from django.template.response import TemplateResponse
# from .models import SalesData

# class SalesDataAdmin(admin.ModelAdmin):
#     change_list_template = "admin/charts/salesdata_change_list.html"
    
#     def changelist_view(self, request, extra_context=None):
#         as_json = request.GET.get('as_json')
#         if as_json:
#             data = list(SalesData.objects.values())
#             return JsonResponse(data, safe=False)
#         extra_context = extra_context or {}
#         return super().changelist_view(request, extra_context=extra_context)

# admin.site.register(SalesData, SalesDataAdmin)

from django.contrib import admin
from django.urls import path
from django.http import JsonResponse
from django.template.response import TemplateResponse
from .models import Allocation, MonthlyIncome

class AllocationAdmin(admin.ModelAdmin):
    change_list_template = "admin/charts/allocation_change_list.html"
    
    def changelist_view(self, request, extra_context=None):
        as_json = request.GET.get('as_json')
        if as_json:
            data = list(Allocation.objects.values())
            return JsonResponse(data, safe=False)
        extra_context = extra_context or {}
        extra_context['allocations'] = Allocation.objects.all()
        return super().changelist_view(request, extra_context=extra_context)

admin.site.register(Allocation, AllocationAdmin)


from django.contrib import admin
from django.urls import path
from django.http import JsonResponse
from django.template.response import TemplateResponse
from .models import MonthlyIncome, Allocation

class MonthlyIncomeAdmin(admin.ModelAdmin):
    change_list_template = "admin/charts/monthlyincome_change_list.html"

    def changelist_view(self, request, extra_context=None):
        as_json = request.GET.get('as_json')
        if as_json:
            data = list(MonthlyIncome.objects.values())
            return JsonResponse(data, safe=False)
        extra_context = extra_context or {}
        extra_context['monthly_incomes'] = MonthlyIncome.objects.all()
        return super().changelist_view(request, extra_context=extra_context)


admin.site.register(MonthlyIncome, MonthlyIncomeAdmin)