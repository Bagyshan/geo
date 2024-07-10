from django.db import models
from news.models import News

# Create your models here.
class Comment(models.Model):
    username = models.CharField(max_length=30, verbose_name='Имя')
    email = models.EmailField(verbose_name='Email')
    content = models.TextField(verbose_name='Сообщение')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Дата отправки')
    news = models.ForeignKey(
        News,
        on_delete=models.CASCADE,
        related_name='comments',
        verbose_name='Новость'
    )

    def __str__(self) -> str:
        return self.content
    
    class Meta:
        verbose_name = 'Комментарий'
        verbose_name_plural = 'Комментарии'