from django.db import models
from django.contrib.postgres.fields import ArrayField
from django.contrib.gis.db import models as gis_models
from django.db import models
from django_admin_geomap import GeoItem

        
class Maps(models.Model):
    COLOR_CHOICES = [
        ('#FFFF00', 'Gold'),
        ('#000000', 'Coal'),
        ('#808080', 'General'),
    ]


    title = models.CharField(max_length=50)
    body = models.TextField(null=True, blank=True)
    image = models.ImageField(upload_to='images')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    location = gis_models.PointField()
    object_type = models.CharField(max_length=10, choices=COLOR_CHOICES)
    file = models.FileField(upload_to='pdfs', null=True, blank=True)


    def __str__(self) -> str:
        return self.title
    

    class Meta:
        verbose_name = 'Карты'
        verbose_name_plural = 'Карты'


from django.db import models
from django.contrib.postgres.fields import ArrayField
from django.contrib.gis.db import models as gis_models
from django.db import models
from django_admin_geomap import GeoItem

        
class NewMaps(models.Model):
    COLOR_CHOICES = [
        ('#FFFF00', 'Gold'),
        ('#000000', 'Coal'),
        ('#808080', 'General'),
    ]


    title = models.CharField(max_length=50)
    body = models.TextField(null=True, blank=True)
    image = models.ImageField(upload_to='images')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    location = gis_models.PointField()
    object_type = models.CharField(max_length=10, choices=COLOR_CHOICES)
    file = models.FileField(upload_to='pdfs', null=True, blank=True)


    def __str__(self) -> str:
        return self.title
    

    class Meta:
        verbose_name = 'Геологоразведка'
        verbose_name_plural = 'Геологоразведка'