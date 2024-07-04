from rest_framework import viewsets
from .models import Achievements
from .serializers import AchievementsSerializer



class AchievementsViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Achievements.objects.all()
    serializer_class = AchievementsSerializer