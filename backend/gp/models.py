from django.db import models
from django.core.exceptions import ValidationError


# Create your models here.
class GP(models.Model):
    title = models.CharField(max_length=200, verbose_name='Название')
    body = models.TextField(blank=True, null=True, verbose_name='Описание')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Дата создания')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Дата обновления')
    image = models.ImageField(upload_to='images', verbose_name='Фотография')
    file = models.FileField(upload_to='pdfs', null=True, blank=True, verbose_name='Файл')

    def save(self, *args, **kwargs):
        if not self.pk and GP.objects.count() >= 6:
            raise ValidationError("Вы не можете создать более 6 ГП.")
        super(GP, self).save(*args, **kwargs)


    def __str__(self) -> str:
        return self.title
    
    class Meta:
        verbose_name = 'ГП'
        verbose_name_plural = 'ГП'