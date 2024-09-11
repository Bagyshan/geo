from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CommentViewSet, KyrgyzGeologyApplicationViewSet

router = DefaultRouter()
router.register(r'', CommentViewSet, basename='post')
# router.register(r'applicationtype', ApplicationTypeViewSet)
# router.register(r'kyrgyzgeologyapplication', KyrgyzGeologyApplicationViewSet)

urlpatterns = [
    path('news/<int:news_id>/comment/', CommentViewSet.as_view({'post': 'create'}), name='news-comment'),
    path('kyrgyzgeologyapplication/', KyrgyzGeologyApplicationViewSet.as_view({'post': 'create'}), name='kyrgyz-geology-application'),
    # path('boezgrtapplication/', BoezgrtApplicationViewSet.as_view({'post': 'create'}), name='boezgrt-application'),
    path('', include(router.urls)),
]