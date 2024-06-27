from django.contrib import admin
from .models import Employees
from tinymce.widgets import TinyMCE
from django.db import models
from modeltranslation.admin import TranslationAdmin


class EmployeesAdmin(TranslationAdmin):
    formfield_overrides = {
        models.TextField: {'widget': TinyMCE()},
    }

    list_display = ('id', 'name', 'created_at')

admin.site.register(Employees, EmployeesAdmin)