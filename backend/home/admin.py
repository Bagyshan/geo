from django.contrib import admin
from .models import Home
from modeltranslation.admin import TranslationAdmin
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _
# Register your models here.


class HomeAdmin(TranslationAdmin):
    def save_model(self, request, obj, form, change):
        if not obj.pk and Home.objects.count() >= 5:
            raise ValidationError(_("Вы не можете создать более 5 домашних страниц."))
        super(HomeAdmin, self).save_model(request, obj, form, change)

    def has_add_permission(self, request):
        if Home.objects.count() >= 5:
            return False
        return super(HomeAdmin, self).has_add_permission(request)
    
    def has_delete_permission(self, request, obj=None):
        return False

    list_display = ('id', 'title')

admin.site.register(Home, HomeAdmin)

