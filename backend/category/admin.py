from django.contrib import admin
from .models import Category
from tinymce.widgets import TinyMCE
from django.db import models
from modeltranslation.admin import TranslationAdmin


class CategoryAdmin(TranslationAdmin):

    list_display = ('id', 'title', 'created_at')

admin.site.register(Category, CategoryAdmin)