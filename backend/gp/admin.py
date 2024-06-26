from django.contrib import admin
from .models import GP
from tinymce.widgets import TinyMCE
from django.db import models
from modeltranslation.admin import TranslationAdmin
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _


class GPAdmin(TranslationAdmin):
    def save_model(self, request, obj, form, change):
        if not obj.pk and GP.objects.count() >= 6:
            raise ValidationError(_("Вы не можете создать более 6 ГП."))
        super(GPAdmin, self).save_model(request, obj, form, change)

    def has_add_permission(self, request):
        if GP.objects.count() >= 6:
            return False
        return super(GPAdmin, self).has_add_permission(request)

    formfield_overrides = {
        models.TextField: {'widget': TinyMCE()},
    }

    list_display = ('id', 'title', 'created_at')

admin.site.register(GP, GPAdmin)