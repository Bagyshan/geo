from modeltranslation.translator import register, TranslationOptions
from .models import BoezgrtHome, Products


@register(BoezgrtHome)
class BoezgrtHomeTranslationOptions(TranslationOptions):
    fields = ('body', )

@register(Products)
class ProductsTranslationOptions(TranslationOptions):
    fields = ('title', 'body')