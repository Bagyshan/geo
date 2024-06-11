from rest_framework import serializers
from .models import News


class NewsSerializer(serializers.ModelSerializer):
    body = serializers.CharField()

    class Meta:
        model = News
        fields = '__all__'