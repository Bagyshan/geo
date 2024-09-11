from rest_framework import serializers
from .models import Comment, KyrgyzGeologyApplication


# class ApplicationTypeSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = ApplicationType
#         fields = '__all__'        

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        exclude = ['id', 'created_at']
        model = Comment
        read_only_fields = ['news']

class KyrgyzGeologyApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = KyrgyzGeologyApplication
        fields = '__all__'

# class BoezgrtApplicationSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = BoezgrtApplication
#         fields = '__all__'