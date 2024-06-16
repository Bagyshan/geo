from django.contrib import admin
from .models import Home
from tinymce.widgets import TinyMCE
from django.db import models
from modeltranslation.admin import TranslationAdmin
# Register your models here.


class HomeAdmin(TranslationAdmin):

    list_display = ('id', 'title')

admin.site.register(Home, HomeAdmin)

