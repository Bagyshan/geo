from django.contrib import admin
from .models import Comment
# Register your models here.


class CommentAdmin(admin.ModelAdmin):
    list_display = ('id', 'content', 'username', 'created_at', 'news')

admin.site.register(Comment, CommentAdmin)