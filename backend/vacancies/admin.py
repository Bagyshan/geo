from django.contrib import admin
from .models import Vacancies
from tinymce.widgets import TinyMCE
from django.db import models
from modeltranslation.admin import TranslationAdmin


class VacanciesAdmin(TranslationAdmin):
    formfield_overrides = {
        models.TextField: {'widget': TinyMCE()},
    }

    list_display = ('id', 'title', 'created_at')

admin.site.register(Vacancies, VacanciesAdmin)