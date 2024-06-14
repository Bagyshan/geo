from celery import shared_task
from config.celery import app
from django.core.mail import send_mail
from .models import Comment



@shared_task
def send_comment_notification(comment_id):
    comment = Comment.objects.get(pk=comment_id)
    email = comment.email
    name = comment.username
    news_title = comment.news.title_ru
    news_id = comment.news.id

    subject = 'Уведомление о новом комментарии'
    message = f'{name} добавил комментарий к вашей новости "{news_title}", под id номером: "{news_id}"\n\nТекст комментария: "{comment.content}"\n\nЕго email: "{email}"'
    from_email = 'bagishan040401@yandex.ru'
    recipient_list = ['bagishan01@gmail.com']

    send_mail(subject, message, from_email, recipient_list)