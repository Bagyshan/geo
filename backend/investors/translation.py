from modeltranslation.translator import register, TranslationOptions
from .models import Investors


@register(Investors)
class InvestorsTranslationOptions(TranslationOptions):
    fields = ('title', 'body')