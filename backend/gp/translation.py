from modeltranslation.translator import register, TranslationOptions
from .models import GP


@register(GP)
class GPTranslationOptions(TranslationOptions):
    fields = ('title', 'body')