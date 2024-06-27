from modeltranslation.translator import register, TranslationOptions
from .models import AboutCompany


@register(AboutCompany)
class AboutCompanyTranslationOptions(TranslationOptions):
    fields = ('body',)