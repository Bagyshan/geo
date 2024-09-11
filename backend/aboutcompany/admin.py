from django.contrib import admin
from .models import AboutCompany
from modeltranslation.admin import TranslationAdmin
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _
from django.db import models
from tinymce.widgets import TinyMCE
# Register your models here.


class AboutCompanyAdmin(TranslationAdmin):
    def save_model(self, request, obj, form, change):
        if not obj.pk and AboutCompany.objects.count() >= 1:
            raise ValidationError(_("Вы не можете создать более 1 статей о компании."))
        super(AboutCompanyAdmin, self).save_model(request, obj, form, change)

    def has_add_permission(self, request):
        if AboutCompany.objects.count() >= 1:
            return False
        return super(AboutCompanyAdmin, self).has_add_permission(request)
    
    def has_delete_permission(self, request, obj=None):
        return False
    
    formfield_overrides = {
        models.TextField: {'widget': TinyMCE()},
    }

    list_display = ('id', 'created_at')

admin.site.register(AboutCompany, AboutCompanyAdmin)