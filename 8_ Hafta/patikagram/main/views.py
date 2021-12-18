
from rest_framework import serializers, viewsets
from django.contrib.auth.models import User
from rest_framework.response import Response
from main.serializers import UserSerializer,PostSerializer,LikeSerializer,CommentSerializer
from main.models import Post,Comment,Like
from rest_framework.decorators import action

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class LikeViewSet(viewsets.ModelViewSet):
    queryset = Like.objects.all()
    serializer_class = LikeSerializer

class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer