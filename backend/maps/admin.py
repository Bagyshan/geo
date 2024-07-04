from django.contrib import admin
from .models import Maps, NewMaps
from tinymce.widgets import TinyMCE
from django import forms
from django.db import models
from leaflet.forms.widgets import LeafletWidget
from modeltranslation.admin import TranslationAdmin
from leaflet.admin import LeafletGeoAdmin
from django.contrib import admin
from leaflet.admin import LeafletGeoAdminMixin
from django.contrib.gis.db import models as gis_models

# class MapsAdminForm(forms.ModelForm):
#     class Meta:
#         model = Maps
#         fields = '__all__'
#         widgets = {
#             'location': LeafletWidget(),  # Используем LeafletWidget для поля location
#             'body': TinyMCE(),  # Используем TinyMCE для поля body
#         }


class MapsAdmin(TranslationAdmin, LeafletGeoAdmin):
    # form = MapsAdminForm
    formfield_overrides = {
        models.TextField: {'widget': TinyMCE()},
    }

    list_display = ('id', 'title', 'object_type', 'created_at')

admin.site.register(Maps, MapsAdmin)

class NewMapsAdmin(TranslationAdmin, LeafletGeoAdmin):
    # form = NewMapsAdminForm
    formfield_overrides = {
        models.TextField: {'widget': TinyMCE()},
    }

    list_display = ('id', 'title', 'object_type', 'created_at')

admin.site.register(NewMaps, NewMapsAdmin)


# models.py:

# from django.db import models
# from django.contrib.postgres.fields import ArrayField
# from django.contrib.gis.db import models as gis_models
# from django.db import models
# from django_admin_geomap import GeoItem

        
# class Maps(models.Model):
#     title = models.CharField(max_length=50)
#     body = models.TextField(null=True, blank=True)
#     image = models.ImageField(upload_to='images')
#     created_at = models.DateTimeField(auto_now_add=True)
#     updated_at = models.DateTimeField(auto_now=True)
#     location = gis_models.PointField()


#     def __str__(self) -> str:
#         return self.title


# admin.py:

# from django.contrib import admin
# from .models import Maps
# from tinymce.widgets import TinyMCE
# from django import forms
# from django.db import models
# from leaflet.forms.widgets import LeafletWidget
# from modeltranslation.admin import TranslationAdmin
# from leaflet.admin import LeafletGeoAdmin
# from django.contrib import admin
# from leaflet.admin import LeafletGeoAdminMixin
# from django.contrib.gis.db import models as gis_models




# class MapsAdmin(TranslationAdmin, LeafletGeoAdmin):
#     formfield_overrides = {
#         models.TextField: {'widget': TinyMCE()},
#     }

#     list_display = ('title', 'body')

# admin.site.register(Maps, MapsAdmin)


# вот так у меня не работают карты в django admin. мне нужно сделать так чтобы в базе данных в поле location хранились расшифрованные координаты 0101000020E6100000B91AD995960C5340A8C30AB77C3C4540 в виде широты и долготы в списке из float