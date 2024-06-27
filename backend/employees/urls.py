from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import EmployeesViewSet

router = DefaultRouter()
router.register('', EmployeesViewSet)

urlpatterns = [
    path('', include(router.urls)),
]