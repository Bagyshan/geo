from django.db import models
from django.utils import timezone


# Create your models here.
class News(models.Model):
    title = models.CharField(max_length=250)
    image = models.ImageField(upload_to='images')
    preview = models.ImageField(upload_to='previews')
    body = models.TextField(null=True, blank=True)
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)
    file = models.FileField(upload_to='pdfs', null=True, blank=True)

    def save(self, *args, **kwargs):
        self.updated_at = timezone.now().date()
        super(News, self).save(*args, **kwargs)

    def __str__(self) -> str:
        return self.title
    
    class Meta:
        verbose_name = 'Новости'
        verbose_name_plural = 'Новости'