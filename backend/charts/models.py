from typing import Any
from django.db import models

class Allocation(models.Model):
    COLOR_CHOICES = [
        ('#FFD700', 'Золото'),
        ('#FFFF00', 'Рассыпное золото'),
        ('#808080', 'Каменный уголь'),
        ('#000000', 'Уголь'),
        ('#E6E6FA', 'Мраморизованный известняк'),
        ('#BA55D3', 'Сурьма, флюорит'),
        ('#FFFFFF', 'Гипс'),
        ('#2F4F4F', 'Глинистые сланцы'),
        ('#00FA9A', 'Гранит'),
        ('#DAA520', 'Ракушечник'),
    ]

    category = models.CharField(max_length=100, verbose_name='Название категории месторождений')
    amount = models.IntegerField(verbose_name='Количество месторождений')
    percentage = models.FloatField(verbose_name='Процент от общего количества')
    color = models.CharField(max_length=10, choices=COLOR_CHOICES, verbose_name='Тип месторождений')

    def __str__(self):
        return self.category
    
    class Meta:
        verbose_name = 'Диаграмма'
        verbose_name_plural = 'Диаграммы'



class MonthlyIncome(models.Model):
    month = models.CharField(max_length=20, verbose_name='Месяц')
    income = models.FloatField(verbose_name='Доход')

    def __str__(self):
        return f"{self.month} - {self.income}"
    
    class Meta:
        verbose_name = 'График'
        verbose_name_plural = 'Графики'