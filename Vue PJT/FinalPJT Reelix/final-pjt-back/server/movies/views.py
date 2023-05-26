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

from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import permission_classes


@api_view(['GET'])
def index(request):
    movies = Movie.objects.all()
    serializer = MovieSerializer(movies, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def detail(request, movie_pk):
    movie = Movie.objects.get(pk=movie_pk)
    serializer = MovieSerializer(movie)
    return Response(serializer.data)

@api_view(['GET'])
def comment_list(request):
    if request.method == 'GET':
        comments = Comment.objects.all()
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data)


@api_view(['POST'])
def comment_create(request, movie_pk):
    movie = Movie.objects.get(pk=movie_pk)
    serializer = CommentSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        serializer.save(movie=movie)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET', 'DELETE', 'PUT'])
def comment_detail(request, comment_pk):
    comment = Comment.objects.get(pk=comment_pk)

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
        
# @api_view(['GET'])
# def search(request, inputData):
#     if request.method == 'POST':
#         search = request.data.get('search')
#         keyword = Movie.objects.filter(title__icontains=search) | Movie.objects.filter(overview__icontains=search)
#         serializer = MovieSerializer(keyword, many=True)
#         return Response(serializer.data)
    # return Response([])

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def likes(request, movie_id, user_id):
    movie = Movie.objects.get(pk=movie_id)

    if movie.Like_users.filter(pk=user_id).exists():
        movie.Like_users.remove(user_id)
    else:
        movie.Like_users.add(user_id)
    
    movie.save()
    serializer = MovieSerializer(movie)

    return Response(serializer.data)