from rest_framework import serializers
from .models import Maps
from mapwidgets.widgets import GooglePointFieldWidget
from django.contrib.gis.geos import GEOSGeometry


class MapsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Maps
        fields = '__all__'