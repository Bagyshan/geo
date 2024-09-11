from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import MapsCustomGeoJSONLayerView, NewMapsCustomGeoJSONLayerView, MapsViewSet, NewMapsViewSet
from djgeojson.views import GeoJSONLayerView
from .models import Maps, NewMaps


urlpatterns = [
    path('maps/', MapsViewSet.as_view({'get': 'list'}), name='maps-list'),
    path('maps/<int:pk>/', MapsViewSet.as_view({'get': 'retrieve'}), name='maps-detail'),
    path('newmaps/', NewMapsViewSet.as_view({'get': 'list'}), name='newmaps-list'),
    path('newmaps/<int:pk>/', NewMapsViewSet.as_view({'get': 'retrieve'}), name='newmaps-detail'),
]

# urlpatterns = [
#     path('maps/', GeoJSONLayerView.as_view({'get': 'list'}), name='maps-list'),
#     path('maps/<int:pk>/', GeoJSONLayerView.as_view({'get': 'retrieve'}), name='maps-detail'),
#     path('newmaps/', GeoJSONLayerView.as_view({'get': 'list'}), name='newmaps-list'),
#     path('newmaps/<int:pk>/', GeoJSONLayerView.as_view({'get': 'retrieve'}), name='newmaps-detail'),
# ]



# router = DefaultRouter()
# router.register(r'maps', MapsViewSet)
# router.register(r'newmaps', NewMapsViewSet)

# urlpatterns = [
#     path('', include(router.urls)),
# ]
# urlpatterns = [
#     path('maps/', GeoJSONLayerView.as_view(model=Maps,
#         properties=('id', 'title', 'title_ru', 'title_en', 'title_ky', 'created_at', 'object_type'))),
#     path('maps/<int:pk>', GeoJSONLayerView.as_view(model=Maps,
#         properties=('id', 'title', 'title_ru', 'title_en', 'title_ky', 'body', 'body_ru', 'body_en', 'body_ky', 'created_at', 'object_type'))),
#     path('newmaps/', GeoJSONLayerView.as_view(model=NewMaps,
#         properties=('id', 'title', 'title_ru', 'title_en', 'title_ky', 'created_at', 'object_type'))),
#     path('newmaps/<int:pk>', GeoJSONLayerView.as_view(model=NewMaps,
#         properties=('id', 'title', 'title_ru', 'title_en', 'title_ky', 'body', 'body_ru', 'body_en', 'body_ky', 'created_at', 'object_type'))),
# ]