from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('<int:movie_pk>/', views.detail, name='detail'),
    path('comments/', views.comment_list),
    path('<int:movie_pk>/comments/', views.comment_create, name='comment_create'),
    path('<int:movie_pk>/comments/<int:comment_pk>/',
         views.comment_detail, name='comment_detail'),
    # path('<int:movie_pk>/likes/', views.likes, name='likes'),
    # path('search/', views.search, name='search'),
]
