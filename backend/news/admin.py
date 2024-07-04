from django.contrib import admin
from .models import News
from tinymce.widgets import TinyMCE
from django.db import models
from modeltranslation.admin import TranslationAdmin
from django import forms


class NewsAdmin(TranslationAdmin):
    formfield_overrides = {
        models.TextField: {'widget': TinyMCE()},
    }

    list_display = ('id', 'title', 'created_at')

admin.site.register(News, NewsAdmin)