from modeltranslation.translator import register, TranslationOptions
from .models import Achievements


@register(Achievements)
class AchievementsTranslationOptions(TranslationOptions):
    fields = ('title', 'body')