from django.contrib import admin
from .models import Comment, KyrgyzGeologyApplication
# Register your models here.


class CommentAdmin(admin.ModelAdmin):
    list_display = ('id', 'content', 'username', 'created_at', 'news')

admin.site.register(Comment, CommentAdmin)


# class ApplicationTypeAdmin(admin.ModelAdmin):
#     list_display = ('id', 'name', 'created_at')

# admin.site.register(ApplicationType, ApplicationTypeAdmin)


class KyrgyzGeologyApplicationAdmin(admin.ModelAdmin):
    list_display = ('id', 'application_type', 'content', 'username', 'created_at')

admin.site.register(KyrgyzGeologyApplication, KyrgyzGeologyApplicationAdmin)


# class BoezgrtApplicationAdmin(admin.ModelAdmin):
#     list_display = ('id', 'content', 'username', 'created_at')

# admin.site.register(BoezgrtApplication, BoezgrtApplicationAdmin)