from django.contrib import admin
from .models import Service
from tinymce.widgets import TinyMCE
from django.db import models
from modeltranslation.admin import TranslationAdmin


class ServiceAdmin(TranslationAdmin):
    formfield_overrides = {
        models.TextField: {'widget': TinyMCE()},
    }

    list_display = ('id', 'title', 'body')

admin.site.register(Service, ServiceAdmin)
