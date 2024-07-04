from modeltranslation.translator import register, TranslationOptions
from .models import Maps, NewMaps


@register(Maps)
class MapsTranslationOptions(TranslationOptions):
    fields = ('title', 'body')

@register(NewMaps)
class NewMapsTranslationOptions(TranslationOptions):
    fields = ('title', 'body')