from django.db import models
from django.utils import timezone


# Create your models here.
class News(models.Model):
    title = models.CharField(max_length=250, verbose_name='Название')
    body = models.TextField(null=True, blank=True, verbose_name='Описание')
    created_at = models.DateField(auto_now_add=True, verbose_name='Дата создания')
    updated_at = models.DateField(auto_now=True, verbose_name='Дата обновления')
    preview = models.ImageField(upload_to='previews', verbose_name='Превью')
    image = models.ImageField(upload_to='images', verbose_name='Фотография')
    file = models.FileField(upload_to='pdfs', null=True, blank=True, verbose_name='Файл')

    def save(self, *args, **kwargs):
        self.updated_at = timezone.now().date()
        super(News, self).save(*args, **kwargs)

    def __str__(self) -> str:
        return self.title
    
    class Meta:
        verbose_name = 'Новости'
        verbose_name_plural = 'Новости'