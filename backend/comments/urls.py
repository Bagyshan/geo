from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CommentViewSet

router = DefaultRouter()
router.register(r'', CommentViewSet, basename='post')

urlpatterns = [
    path('news/<int:news_id>/comment/', CommentViewSet.as_view({'post': 'create'}), name='news-comment'),
    path('', include(router.urls)),
]