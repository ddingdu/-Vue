from rest_framework.response import Response
from rest_framework.decorators import api_view

from django.shortcuts import render, redirect, get_object_or_404
from django.views.decorators.http import require_POST, require_safe, require_http_methods
from django.contrib.auth.decorators import login_required

from rest_framework import status

from .models import Movie, Genre, Comment
from .forms import MovieForm, CommentForm

from django.core import serializers
from .serializers import MovieSerializer, CommentSerializer


@api_view(['GET'])
def index(request):
    movies = Movie.objects.all()
    serializer = MovieSerializer(movies, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def detail(request, movie_pk):
    movie = get_object_or_404(Movie, pk=movie_pk)
    serializer = MovieSerializer(movie)
    return Response(serializer.data)

@api_view(['GET'])
def comment_list(request):
    if request.method == 'GET':
        comments = Comment.objects.all()
        # comments = get_list_or_404(Comment)
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data)


@api_view(['POST'])
def comment_create(request, movie_pk):
    movie = Movie.objects.get(pk=movie_pk)
    # movie = get_object_or_404(Movie, pk=movie_pk)
    serializer = CommentSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        serializer.save(movie=movie)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET', 'DELETE', 'PUT'])
def comment_detail(request, comment_pk):
    comment = Comment.objects.get(pk=comment_pk)
    # comment = get_object_or_404(Comment, pk=comment_pk)

    if request.method == 'GET':
        serializer = CommentSerializer(comment)
        return Response(serializer.data)

    elif request.method == 'DELETE':
        comment.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    elif request.method == 'PUT':
        serializer = CommentSerializer(comment, data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)


# @require_POST
# def likes(request, movie_pk):
#     if request.user.is_authenticated:
#         movie = Movie.objects.get(pk=movie_pk)
#         if movie.like_users.filter(pk=request.user.pk).exists():
#             movie.like_users.remove(request.user)
#         else:
#             movie.like_users.add(request.user)
#         return redirect('movies:index')
#     return redirect('accounts:login')


# @require_POST
# def search(request):
#     if request.method == 'POST':
#         search = request.POST["search"]
#         keyword = Movie.objects.filter(title__icontains=search) | Movie.objects.filter(
#             description__icontains=search)
#         context = {
#             'search': search,
#             'keyword': keyword,
#         }
#         return render(request, 'movies/search.html', context)
#     return render(request, 'movies/search.html', {})
