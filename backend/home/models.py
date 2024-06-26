from modeltranslation.translator import register, TranslationOptions
from django.db import models
from django.core.exceptions import ValidationError


class Home(models.Model):
    title = models.CharField(max_length=200)
    mini_title = models.CharField(max_length=10)
    image = models.ImageField(upload_to='media')
    icon = models.ImageField(upload_to='icons')


    def save(self, *args, **kwargs):
        if not self.pk and Home.objects.count() >= 5:
            raise ValidationError("Вы не можете создать более 5 домашних страниц.")
        super(Home, self).save(*args, **kwargs)


    def __str__(self) -> str:
        return self.title

    class Meta:
        verbose_name = 'Домашняя страница'
        verbose_name_plural = 'Домашние страницы'


# @register(Home)
# class HomeTranslationOptions(TranslationOptions):
#     fields = ('title',)