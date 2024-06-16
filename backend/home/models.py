from modeltranslation.translator import register, TranslationOptions
from django.db import models
from ckeditor.fields import RichTextField


class Home(models.Model):
    title = models.CharField(max_length=200)
    image = models.ImageField(upload_to='media')


    def __str__(self) -> str:
        return self.title

    class Meta:
        verbose_name = 'Домашняя страница'
        verbose_name_plural = 'Домашние страницы'


# @register(Home)
# class HomeTranslationOptions(TranslationOptions):
#     fields = ('title',)