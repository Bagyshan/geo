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


    title = models.CharField(max_length=50, verbose_name='Название')
    body = models.TextField(null=True, blank=True, verbose_name='Описание')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Дата создания')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Дата обновления')
    location = gis_models.PointField(verbose_name='Местоположение')
    object_type = models.CharField(max_length=10, choices=COLOR_CHOICES, verbose_name='Категория месторождения')
    image = models.ImageField(upload_to='images', verbose_name='Фотогорафия')
    file = models.FileField(upload_to='pdfs', null=True, blank=True, verbose_name='Файл')


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


    title = models.CharField(max_length=50, verbose_name='Название')
    body = models.TextField(null=True, blank=True, verbose_name='Описание')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Дата создания')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Дата обновления')
    location = gis_models.PointField(verbose_name='Местоположение')
    object_type = models.CharField(max_length=10, choices=COLOR_CHOICES, verbose_name='Категория месторождения')
    image = models.ImageField(upload_to='images', verbose_name='Фотография')
    file = models.FileField(upload_to='pdfs', null=True, blank=True, verbose_name='Файл')


    def __str__(self) -> str:
        return self.title
    

    class Meta:
        verbose_name = 'Геологоразведка'
        verbose_name_plural = 'Геологоразведка'