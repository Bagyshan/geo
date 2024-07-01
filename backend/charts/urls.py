from django.urls import path, include
from .views import AllocationViewSet, MonthlyIncomeViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'allocation', AllocationViewSet)
router.register(r'monthlyincome', MonthlyIncomeViewSet)

urlpatterns = [
    path('category-chart/', include(router.urls)),
]


# from django.urls import path
# from .views import income_chart_view

# urlpatterns = [
#     path('income-chart/', income_chart_view, name='income_chart'),
# ]