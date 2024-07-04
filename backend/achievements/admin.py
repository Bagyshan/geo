from django.contrib import admin
from .models import Achievements
from tinymce.widgets import TinyMCE
from django.db import models
from modeltranslation.admin import TranslationAdmin


class AchievementsAdmin(TranslationAdmin):
    formfield_overrides = {
        models.TextField: {'widget': TinyMCE()},
    }

    list_display = ('id', 'title', 'created_at')

admin.site.register(Achievements, AchievementsAdmin)