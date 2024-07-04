from django.db import models

# Create your models here.
class Achievements(models.Model):
    title = models.CharField(max_length=150)
    body = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    image = models.ImageField(upload_to='images')
    file = models.FileField(upload_to='pdfs', blank=True, null=True)


    def __str__(self) -> str:
        return self.title
    
    class Meta:
        verbose_name = 'Достижение'
        verbose_name_plural = 'Достижения'