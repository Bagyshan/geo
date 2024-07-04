from django.db import models

# Create your models here.
class AboutCompany(models.Model):
    body = models.TextField(verbose_name='Описание')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Дата создания')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Дата обновления')
    image = models.ImageField(upload_to='images', blank=True, null=True, verbose_name='Фотография')
    file = models.FileField(upload_to='pdfs', blank=True, null=True, verbose_name='Файл')
    
    class Meta:
        verbose_name = 'О компании'
        verbose_name_plural = 'О компании'