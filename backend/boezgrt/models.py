from django.db import models
from django.core.exceptions import ValidationError

# Create your models here.
class BoezgrtHome(models.Model):
    body = models.TextField(null=True, blank=True, verbose_name='Описание')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Дата создания')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Дата обновления')

    def __str__(self) -> str:
        return self.id
    
    def save(self, *args, **kwargs):
        if not self.pk and BoezgrtHome.objects.count() >= 1:
            raise ValidationError("Вы не можете создать более 1 статей о компании.")
        super(BoezgrtHome, self).save(*args, **kwargs)
    
    class Meta:
        verbose_name = 'Главная'
        verbose_name_plural = 'Главная'


class Products(models.Model):
    title = models.CharField(max_length=50, verbose_name='Название')
    body = models.TextField(null=True, blank=True, verbose_name='Описание')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Дата создания')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Дата обновления')
    price = models.CharField(max_length=20, verbose_name='Цена')
    image = models.ImageField(upload_to='images', verbose_name='Фотография')
    file = models.FileField(upload_to='pdfs', verbose_name='Файл')

    def __str__(self) -> str:
        return self.title
    
    class Meta:
        verbose_name = 'Продукция'
        verbose_name_plural = 'Продукция'


