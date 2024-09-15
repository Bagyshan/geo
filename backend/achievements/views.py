from rest_framework import viewsets
from .models import Achievements
from .serializers import AchievementsSerializer
from rest_framework import permissions



class AchievementsViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Achievements.objects.all()
    serializer_class = AchievementsSerializer

    def get_permissions(self):
        if self.request.method in ['PATCH', 'PUT', 'DELETE', 'POST']:
            return [permissions.IsAdminUser()]
        return [permissions.AllowAny()]