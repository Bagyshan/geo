from modeltranslation.translator import register, TranslationOptions
from .models import Home


@register(Home)
class HomeTranslationOptions(TranslationOptions):
    fields = ('title',)