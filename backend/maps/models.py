from django.db import models
from django.contrib.postgres.fields import ArrayField
from django.contrib.gis.db import models as gis_models
from django.db import models
from djgeojson.fields import PolygonField

        
class Maps(models.Model):
    COLOR_CHOICES = [
        ('#FFD700', 'Золото'),
        ('#FFFF00', 'Рассыпное золото'),
        ('#808080', 'Каменный уголь'),
        ('#000000', 'Уголь'),
        ('#E6E6FA', 'Мраморизованный известняк'),
        ('#BA55D3', 'Сурьма, флюорит'),
        ('#C0C0C0', 'Гипс'),
        ('#2F4F4F', 'Глинистые сланцы'),
        ('#00FA9A', 'Гранит'),
        ('#DAA520', 'Ракушечник'),
        ('#F7DA8F', 'Известняк ракушечник'),
        ('#E0DFDB', 'РЗМ'),
        ('#A19D94', 'Железо'),
        ('#DFDBD0', 'Каолин'),
    ]


    title = models.CharField(max_length=50, verbose_name='Название')
    body = models.TextField(null=True, blank=True, verbose_name='Описание')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Дата создания')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Дата обновления')
    geom = PolygonField(help_text='coordinates', verbose_name='Местоположение')
    object_type = models.CharField(max_length=10, choices=COLOR_CHOICES, verbose_name='Категория месторождения')
    image = models.ImageField(max_length=500, upload_to='images', verbose_name='Фотогорафия')
    file = models.FileField(max_length=500, upload_to='pdfs', null=True, blank=True, verbose_name='Файл')


    def __str__(self) -> str:
        return self.title
    

    class Meta:
        verbose_name = 'Карты'
        verbose_name_plural = 'Карты'


from django.db import models
from django.contrib.postgres.fields import ArrayField
from django.contrib.gis.db import models as gis_models
from django.db import models

        
class NewMaps(models.Model):
    COLOR_CHOICES = [
        ('#FFD700', 'Золото'),
        ('#FFFF00', 'Рассыпное золото'),
        ('#808080', 'Каменный уголь'),
        ('#000000', 'Уголь'),
        ('#E6E6FA', 'Мраморизованный известняк'),
        ('#BA55D3', 'Сурьма, флюорит'),
        ('#C0C0C0', 'Гипс'),
        ('#2F4F4F', 'Глинистые сланцы'),
        ('#00FA9A', 'Гранит'),
        ('#DAA520', 'Ракушечник'),
        ('#F7DA8F', 'Известняк ракушечник'),
        ('#E0DFDB', 'РЗМ'),
        ('#A19D94', 'Железо'),
        ('#DFDBD0', 'Каолин'),
    ]


    title = models.CharField(max_length=50, verbose_name='Название')
    body = models.TextField(null=True, blank=True, verbose_name='Описание')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Дата создания')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Дата обновления')
    geom = PolygonField(verbose_name='Местоположение')
    object_type = models.CharField(max_length=10, choices=COLOR_CHOICES, verbose_name='Категория месторождения')
    image = models.ImageField(max_length=500, upload_to='images', verbose_name='Фотография')
    file = models.FileField(max_length=500, upload_to='pdfs', null=True, blank=True, verbose_name='Файл')


    def __str__(self) -> str:
        return self.title
    

    class Meta:
        verbose_name = 'Геологоразведка'
        verbose_name_plural = 'Геологоразведка'