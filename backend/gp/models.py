from django.db import models
from django.core.exceptions import ValidationError


# Create your models here.
class GP(models.Model):
    title = models.CharField(max_length=200)
    body = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    image = models.ImageField(upload_to='images')
    file = models.FileField(upload_to='pdfs', null=True, blank=True)

    def save(self, *args, **kwargs):
        if not self.pk and GP.objects.count() >= 6:
            raise ValidationError("Вы не можете создать более 6 ГП.")
        super(GP, self).save(*args, **kwargs)


    def __str__(self) -> str:
        return self.title
    
    class Meta:
        verbose_name = 'ГП'
        verbose_name_plural = 'ГП'