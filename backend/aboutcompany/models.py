from django.db import models

# Create your models here.
class AboutCompany(models.Model):
    body = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    image = models.ImageField(upload_to='images', blank=True, null=True)
    file = models.FileField(upload_to='pdfs', blank=True, null=True)
    
    class Meta:
        verbose_name = 'О компании'
        verbose_name_plural = 'О компании'