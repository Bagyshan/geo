from modeltranslation.translator import register, TranslationOptions
from .models import Maps


@register(Maps)
class MapsTranslationOptions(TranslationOptions):
    fields = ('title', 'body')