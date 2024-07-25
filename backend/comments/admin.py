from django.contrib import admin
from .models import Comment, KyrgyzGeologyApplication, BoezgrtApplication
# Register your models here.


class CommentAdmin(admin.ModelAdmin):
    list_display = ('id', 'content', 'username', 'created_at', 'news')

admin.site.register(Comment, CommentAdmin)


class KyrgyzGeologyApplicationAdmin(admin.ModelAdmin):
    list_display = ('id', 'content', 'username', 'created_at')

admin.site.register(KyrgyzGeologyApplication, KyrgyzGeologyApplicationAdmin)


class BoezgrtApplicationAdmin(admin.ModelAdmin):
    list_display = ('id', 'content', 'username', 'created_at')

admin.site.register(BoezgrtApplication, BoezgrtApplicationAdmin)