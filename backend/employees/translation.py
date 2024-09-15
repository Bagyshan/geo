from modeltranslation.translator import register, TranslationOptions
from .models import Employees


@register(Employees)
class EmployeesTranslationOptions(TranslationOptions):
    fields = ('body', 'name', 'post')