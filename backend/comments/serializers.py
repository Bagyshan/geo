from rest_framework import serializers
from .models import Comment


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        exclude = ['id', 'created_at']
        model = Comment
        read_only_fields = ['news']