from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

from tweets.views import TweetViewSet


router = routers.DefaultRouter()
router.register('tweets', TweetViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('admin/', admin.site.urls),
]
