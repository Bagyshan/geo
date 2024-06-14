from django.db import models
from ckeditor.fields import RichTextField


class Home(models.Model):
    title = models.CharField(max_length=250)
    image = models.ImageField(upload_to='media')


    def __str__(self) -> str:
        return self.title

    class Meta:
        verbose_name = 'Домашняя страница'
        verbose_name_plural = 'Домашние страницы'