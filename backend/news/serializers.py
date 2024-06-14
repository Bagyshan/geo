from rest_framework import serializers
from .models import News
from comments.serializers import CommentSerializer


class NewsSerializer(serializers.ModelSerializer):
    body = serializers.CharField()

    class Meta:
        model = News
        fields = '__all__'

    comments = serializers.SerializerMethodField(method_name='get_comments')


    def get_comments(self, instance):
        comments = instance.comments.all()
        serializer = CommentSerializer(
            comments, many=True
        )
        return serializer.data
    
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
                representation.pop('comments')
        
        return representation
    
    # def to_representation(self, instance):
    #     repr = super().to_representation(instance)
    #     comment = instance.comments.all()
    #     if comment:
    #         repr['comments'] = NewsSerializer(
    #             comment, many=True
    #         ).data
    #     return repr