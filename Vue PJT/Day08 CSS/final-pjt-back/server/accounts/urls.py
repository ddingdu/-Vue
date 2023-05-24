
from django.urls import path
from . import views

urlpatterns = [
    path("userinfo/", views.userinfo),
    path("profile/<str:username>/", views.ProfileView),
    
]