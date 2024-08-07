from django.db import models

# Create your models here.
class Service(models.Model):
    title = models.CharField(max_length=100, verbose_name='Название')
    body = models.TextField(verbose_name='Описание')

    def __str__(self) -> str:
        return self.title

    class Meta:
        verbose_name = 'Услуга'
        verbose_name_plural = 'Услуги'