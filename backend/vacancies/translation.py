from modeltranslation.translator import register, TranslationOptions
from .models import Vacancies


@register(Vacancies)
class VacanciesTranslationOptions(TranslationOptions):
    fields = ('title', 'body')