from django.db import models

# Create your models here.
class Employees(models.Model):
    name = models.CharField(max_length=100, verbose_name='Имя')
    post = models.CharField(max_length=30, verbose_name='Должность')
    body = models.TextField(verbose_name='Описание')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Дата создания')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Дата обносления')
    image = models.ImageField(upload_to='images', verbose_name='Фотография')
    file = models.FileField(upload_to='pdfs', blank=True, null=True, verbose_name='Файл')

    def __str__(self) -> str:
        return self.name
    
    class Meta:
        verbose_name = 'Сотрудник'
        verbose_name_plural = 'Сотрудники'
