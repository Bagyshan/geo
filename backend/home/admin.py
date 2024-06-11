from django.contrib import admin
from .models import Home
from tinymce.widgets import TinyMCE
from django.db import models
# Register your models here.


class HomeAdmin(admin.ModelAdmin):
    formfield_overrides = {
        models.TextField: {'widget': TinyMCE()},
    }

admin.site.register(Home, HomeAdmin)

