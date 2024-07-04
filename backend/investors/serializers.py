from rest_framework import serializers
from .models import Investors
from comments.serializers import CommentSerializer


class InvestorsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Investors
        fields = '__all__'
    
    def to_representation(self, instance):
        representation = super().to_representation(instance)
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