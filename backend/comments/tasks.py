from celery import shared_task
from config.celery import app
from django.core.mail import send_mail
from .models import Comment, KyrgyzGeologyApplication, BoezgrtApplication
from django.core.mail import EmailMessage
import boto3
from django.conf import settings
import mimetypes
import re


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

def sanitize_email(email):
    # Убираем новые строки и пробелы в начале и конце
    return re.sub(r'[\r\n]+', '', email.strip())



@shared_task
def send_kyrgyzgeology_application(application_id):
    application = KyrgyzGeologyApplication.objects.get(pk=application_id)
    email = application.email
    name = application.username
    file = application.file

    subject = 'Уведомление о новой заявке в Кыргызгеологии'
    message = f'{name} оставил заявку на услуги Кыргызгеологии\n\nТекст заявки: "{application.content}"\n\nЕго email: "{email}"'
    from_email = sanitize_email('bagishan040401@yandex.ru')
    recipient_list = [sanitize_email('bagishan01@gmail.com')]

    email_message = EmailMessage(subject, message, from_email, recipient_list)

    if file:
        s3 = boto3.client('s3', aws_access_key_id=settings.AWS_ACCESS_KEY_ID, aws_secret_access_key=settings.AWS_SECRET_ACCESS_KEY)
        file_content = s3.get_object(Bucket=settings.AWS_STORAGE_BUCKET_NAME, Key=file.name)['Body'].read()
        # email_message.attach(file.name, file_content, file.content_type)
        content_type, encoding = mimetypes.guess_type(file.name)
        if content_type is None:
            content_type = 'application/octet-stream'
        email_message.attach(file.name, file_content, content_type)

    email_message.send()


@shared_task
def send_boezgrt_application(application_id):
    application = BoezgrtApplication.objects.get(pk=application_id)
    email = application.email
    name = application.username
    file = application.file

    subject = 'Уведомление о новой заявке в Боэзгрт'
    message = f'{name} оставил заявку на услуги Боэзгрт\n\nТекст заявки: "{application.content}"\n\nЕго email: "{email}"'
    from_email = sanitize_email('bagishan040401@yandex.ru')
    recipient_list = [sanitize_email('bagishan01@gmail.com')]

    email_message = EmailMessage(subject, message, from_email, recipient_list)

    if file:
        s3 = boto3.client('s3', aws_access_key_id=settings.AWS_ACCESS_KEY_ID, aws_secret_access_key=settings.AWS_SECRET_ACCESS_KEY)
        file_content = s3.get_object(Bucket=settings.AWS_STORAGE_BUCKET_NAME, Key=file.name)['Body'].read()
        # email_message.attach(file.name, file_content, file.content_type)
        content_type, encoding = mimetypes.guess_type(file.name)
        if content_type is None:
            content_type = 'application/octet-stream'
        email_message.attach(file.name, file_content, content_type)

    email_message.send()


# @shared_task
# def send_kyrgyzgeology_application(subject, message, from_email, recipient_list, file=None):
#     email = EmailMessage(subject, message, from_email, recipient_list)
    
#     if file:
#         email.attach_file(file)
    
#     email.send()


