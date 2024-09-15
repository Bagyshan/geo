from django.db import models
from django.utils import timezone
from category.models import Category


# Create your models here.
class News(models.Model):
    title = models.CharField(max_length=150, verbose_name='Название')
    body = models.TextField(null=True, blank=True, verbose_name='Описание')
    category = models.ForeignKey(
        Category,
        on_delete=models.SET_NULL,
        null=True,
        related_name='news',
        verbose_name='Категория'
    )
    created_at = models.DateField(verbose_name='Дата создания')
    updated_at = models.DateField(auto_now=True, verbose_name='Дата обновления')
    preview = models.ImageField(max_length=500, upload_to='previews', verbose_name='Превью')
    image = models.ImageField(max_length=500, upload_to='images', verbose_name='Фотография')
    file = models.FileField(max_length=500, upload_to='pdfs', null=True, blank=True, verbose_name='Файл')

    def save(self, *args, **kwargs):
        self.updated_at = timezone.now().date()
        super(News, self).save(*args, **kwargs)

    def __str__(self) -> str:
        return self.title
    
    class Meta:
        verbose_name = 'Новости'
        verbose_name_plural = 'Новости'