from django.db import models

# Create your models here.
class Investors(models.Model):
    title = models.CharField(max_length=250)
    body = models.TextField(null=True, blank=True)
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)
    image = models.ImageField(upload_to='images')
    file = models.FileField(upload_to='pdfs', null=True, blank=True)

    def __str__(self) -> str:
        return self.title
    
    class Meta:
        verbose_name = 'Инвесторам'
        verbose_name_plural = 'Инвесторам'