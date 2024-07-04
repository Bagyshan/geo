from django.db import models
from news.models import News

# Create your models here.
class Comment(models.Model):
    username = models.CharField(max_length=30)
    email = models.EmailField()
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    news = models.ForeignKey(
        News,
        on_delete=models.CASCADE,
        related_name='comments'
    )

    def __str__(self) -> str:
        return self.content
    
    class Meta:
        verbose_name = 'Комментарий'
        verbose_name_plural = 'Комментарии'