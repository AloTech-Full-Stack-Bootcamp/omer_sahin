from django.contrib import admin
from main.models import Post,Like,Comment


class CommentInline(admin.StackedInline):
    model=Comment
    extra = 0
    readonly_fields = ('user',)
    can_delete = False

    def has_add_permission(self):
        return False

class LikeInline(admin.StackedInline):
    model=Comment
    extra = 0
    readonly_fields = ('user',)
    can_delete = False

    def has_add_permission(self):
        return False

class PostAdmin(admin.ModelAdmin):
    list_display = ["id","content","author","created_at","like_comment_count"]
    list_filter = ["author" , "created_at"]
    search_fields = ["contents","author__username"]
    autocomplete_fields = ["author"]
    inlines = [CommentInline,LikeInline]

    def like_comment_count(self,post):
        return f"{post.likes_count} / {post.comments_count}"

class LikeAdmin(admin.ModelAdmin):
    list_display = ["id","post","user","created_at"]
    list_filter = ["created_at"]
    autocomplete_fields = ["post","user"]

class CommentAdmin(admin.ModelAdmin):
    list_display = ["id","post","user","created_at"]
    list_filter = ["created_at"]
    autocomplete_fields = ["post","user"]
   

admin.site.register(Post,PostAdmin)
admin.site.register(Like,LikeAdmin)
admin.site.register(Comment,CommentAdmin)