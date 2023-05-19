from rest_framework.response import Response
from rest_framework.decorators import api_view

from django.shortcuts import render, get_list_or_404, get_object_or_404
from .serializers import MovieSerializer
from django.views.decorators.http import require_safe
from django.contrib.auth.decorators import login_required

from .models import Movie, Genre

# Create your views here.
# 전체 영화목록 페이지 조회(GET)
@require_safe
def index(request):
    movies = Movie.objects.all()
    page = request.GET.get('page')

    context = {
        'movies' : movies,
    }
    return Response(request, 'movies/index.html', context)


# 단일 영화 상세페이지 조회(GET)
@require_safe
def detail(request, movie_pk):
    movie = get_object_or_404(Movie, pk=movie_pk)
    context = {
        'movie' : movie,

    }
    return render(request, 'movies/detail.html', context)



# 추천 영화 페이지 조회(GET)
# 사용자가 인증되어 있다면.. 장르별 10개의 영화 추천
@login_required
@require_safe
def recommended(request):
    genres = Genre.objects.all()
    context = {'genres':genres}
    return render(request, 'movies/recommended.html', context)



def recommend(request, genre_pk):
    genre = Genre.objects.get(pk=genre_pk)
    movies = Movie.objects.filter(genres=genre)
    movies = sorted(movies, key=lambda x: x.vote_average, reverse=True)[:10]
    context = {
        'movies' : movies,
        'genre' : genre,
    }

    return render(request, 'movies/recommend.html', context)
