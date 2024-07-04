from django.db import models
from django.core.exceptions import ValidationError

# Create your models here.
class Investors(models.Model):
    title = models.CharField(max_length=250, verbose_name='Название')
    body = models.TextField(null=True, blank=True, verbose_name='Описание')
    created_at = models.DateField(auto_now_add=True, verbose_name='Дата создания')
    updated_at = models.DateField(auto_now=True, verbose_name='Дата обновления')
    image = models.ImageField(upload_to='images', verbose_name='Фотография')
    file = models.FileField(upload_to='pdfs', null=True, blank=True, verbose_name='Файл')


    def save(self, *args, **kwargs):
        if not self.pk and Investors.objects.count() >= 5:
            raise ValidationError("Вы не можете создать более 5 страниц инвесторам.")
        super(Investors, self).save(*args, **kwargs)

    def __str__(self) -> str:
        return self.title
    
    class Meta:
        verbose_name = 'Инвесторам'
        verbose_name_plural = 'Инвесторам'