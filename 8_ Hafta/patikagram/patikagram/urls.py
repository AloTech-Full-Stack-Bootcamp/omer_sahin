
from django.contrib import admin
from django.urls import path,include
from rest_framework import routers

from main.views import UserViewSet,PostViewSet,CommentViewSet,LikeViewSet

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)



router = routers.DefaultRouter()
router.register(r'users',UserViewSet)
router.register(r'posts',PostViewSet)
router.register(r'comments',CommentViewSet)
router.register(r'likes',LikeViewSet)


urlpatterns = [
    path('',include(router.urls)),
    path('admin/', admin.site.urls),
    path('/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
