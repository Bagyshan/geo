from django.contrib import admin
from .models import Investors
from tinymce.widgets import TinyMCE
from django.db import models
from modeltranslation.admin import TranslationAdmin
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _
# Register your models here.


class InvestorsAdmin(TranslationAdmin):
    def save_model(self, request, obj, form, change):
        if not obj.pk and Investors.objects.count() >= 5:
            raise ValidationError(_("Вы не можете создать более 5 страниц инвесторам."))
        super(InvestorsAdmin, self).save_model(request, obj, form, change)

    def has_add_permission(self, request):
        if Investors.objects.count() >= 5:
            return False
        return super(InvestorsAdmin, self).has_add_permission(request)

    def has_delete_permission(self, request, obj=None):
        return False

    formfield_overrides = {
        models.TextField: {'widget': TinyMCE()},
    }

    list_display = ('id', 'title', 'created_at')

admin.site.register(Investors, InvestorsAdmin)