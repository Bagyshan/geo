from rest_framework import serializers
from .models import GP


class GPSerializer(serializers.ModelSerializer):
    body = serializers.CharField()

    class Meta:
        model = GP
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