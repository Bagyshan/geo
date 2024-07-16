from django.db import models

# Create your models here.
class Achievements(models.Model):
    title = models.CharField(max_length=200, verbose_name='Название')
    body = models.TextField(verbose_name='Описание')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Дата создания')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Дата обновления')
    image = models.ImageField(upload_to='images', verbose_name='Фотография')
    file = models.FileField(upload_to='pdfs', blank=True, null=True, verbose_name='Файл')


    def __str__(self) -> str:
        return self.title
    
    class Meta:
        verbose_name = 'Достижение'
        verbose_name_plural = 'Достижения'