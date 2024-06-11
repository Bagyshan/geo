from rest_framework import serializers
from .models import Home
from ckeditor.widgets import CKEditorWidget
from tinymce.widgets import TinyMCE


class HomeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Home
        fields = '__all__'

        # widgets = {
        #     'body': CKEditorWidget(),
        # }