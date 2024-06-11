from django.db import models


class PDFFile(models.Model):
    pdf = models.FileField(upload_to='pdfs/')