from django.test import TestCase

# Create your tests here.
from django.contrib.gis.geos import GEOSGeometry

point = GEOSGeometry('0101000020E610000047E6913F180D5340956247E350394540')
longitude, latitude = point.x, point.y
print(latitude, longitude)