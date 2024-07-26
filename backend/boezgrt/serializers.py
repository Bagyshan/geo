from rest_framework import serializers
from .models import BoezgrtHome, Products, Currency



class BoezgrtHomeSerializer(serializers.ModelSerializer):
    class Meta:
        model = BoezgrtHome
        fields = '__all__'
        ref_name = 'BoezgrtHomeSerializer'


class CurrencySerializer(serializers.ModelSerializer):
    class Meta:
        model = Currency
        fields = '__all__'


class ProductsSerializer(serializers.ModelSerializer):
    currencies = serializers.SerializerMethodField()

    class Meta:
        model = Products
        fields = '__all__'

    def get_currencies(self, obj):
        request = self.context.get('request')
        currencies = Currency.objects.all()
        serializer = CurrencySerializer(currencies, many=True, context={'request': request})
        return serializer.data


    def to_representation(self, instance):
        representation = super().to_representation(instance)
        # price = representation['price']
        # currencies = representation['currencies'][0]
        # representation['price_dollar'] = currencies['dollar'] / price
        # representation['price_euro'] = currencies['euro'] / price
        # representation['price_rubles'] = currencies['rubles'] / price
        # representation['price_tenge'] = currencies['tenge'] / price
        # representation.pop('currencies')

        price = representation.get('price')
        currencies = representation.get('currencies')
        
        if price is not None and currencies:
            try:
                currency_data = currencies[0]  # Убедитесь, что у вас есть хотя бы одна валюта
                dollar = float(currency_data.get('dollar', 1))
                euro = float(currency_data.get('euro', 1))
                rubles = float(currency_data.get('rubles', 1))
                tenge = float(currency_data.get('tenge', 1))

                # Производим расчеты для каждой валюты
                representation['price_dollar'] = round(price / dollar, 1)
                representation['price_euro'] = round(price / euro, 1)
                representation['price_rubles'] = round(price / rubles, 1)
                representation['price_tenge'] = round(price / tenge, 1)

            except (IndexError, KeyError, ValueError) as e:
                # Обрабатываем ошибки, если есть проблемы с доступом к данным
                representation['price_dollar'] = None
                representation['price_euro'] = None
                representation['price_rubles'] = None
                representation['price_tenge'] = None
                print(f"Error in currency data: {e}")

        representation.pop('currencies')


        request = self.context.get('request')
        if request:
            action = request.parser_context['view'].action
            if action == 'list':
                # Удаляем поля body при list-действии
                representation.pop('body')
                representation.pop('body_ru')
                representation.pop('body_en')
                representation.pop('body_ky')
                representation.pop('file')
        
        return representation
    