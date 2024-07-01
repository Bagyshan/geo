from modeltranslation.translator import register, TranslationOptions
from .models import Allocation, MonthlyIncome


@register(Allocation)
class AllocationTranslationOptions(TranslationOptions):
    fields = ('category',)



@register(MonthlyIncome)
class MonthlyIncomeTranslationOptions(TranslationOptions):
    fields = ('month',)