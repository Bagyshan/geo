from django.db import models

# Create your models here.
class Service(models.Model):
    title = models.CharField(max_length=100)
    body = models.TextField()

    class Meta:
        verbose_name = 'Услуга'
        verbose_name_plural = 'Услуги'