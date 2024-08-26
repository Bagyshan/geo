from django.db import models
from news.models import News

# Create your models here.
class Comment(models.Model):
    username = models.CharField(max_length=50, verbose_name='Имя')
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


# class ApplicationType(models.Model):
#     name = models.CharField(max_length=50, verbose_name='Название')
#     created_at = models.DateTimeField(auto_now_add=True, verbose_name='Дата создания')
#     updated_at = models.DateTimeField(auto_now=True, verbose_name='Дата обновления')

#     def __str__(self) -> str:
#         return self.name
    
#     class Meta:
#         verbose_name = 'Тип заявки'
#         verbose_name_plural = 'Тип заявок'


class KyrgyzGeologyApplication(models.Model):
    APPLICATION_CHOICES = [
        ('kyrgyzgeology_applicaiton', 'Заявка Кыргызгеологии'),
        ('boezgrt_application', 'Заявка БОЭЗГРТ')
    ]

    username = models.CharField(max_length=50, verbose_name='Имя')
    email = models.EmailField(verbose_name='Email')
    application_type = models.CharField(max_length=100, choices=APPLICATION_CHOICES, verbose_name='Тип заявки')
    content = models.TextField(verbose_name='Сообщение')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Дата отправки')
    file = models.FileField(upload_to='application_files', null=True, blank=True, verbose_name='Файл')

    def __str__(self) -> str:
        return self.content
    
    class Meta:
        verbose_name = 'Заявка Кыргызгеология'
        verbose_name_plural = 'Заявки Кыргызгеология'


# class BoezgrtApplication(models.Model):
#     username = models.CharField(max_length=50, verbose_name='Имя')
#     email = models.EmailField(verbose_name='Email')
#     content = models.TextField(verbose_name='Сообщение')
#     created_at = models.DateTimeField(auto_now_add=True, verbose_name='Дата отправки')
#     file = models.FileField(upload_to='application_files', null=True, blank=True, verbose_name='Файл')

#     def __str__(self) -> str:
#         return self.content
    
#     class Meta:
#         verbose_name = 'Заявка Боэзгрт'
#         verbose_name_plural = 'Заявки Боэзгрт'