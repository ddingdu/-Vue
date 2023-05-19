from django.db import models
from django.conf import settings


class Genre(models.Model):
    name = models.CharField(max_length=50)


class Crew(models.Model):
    name = models.CharField(max_length=50)
    profile_path = models.CharField(max_length=200, null=True)


class Cast(models.Model):
    name = models.CharField(max_length=50)
    profile_path = models.CharField(max_length=200, null=True)
    cast_id = models.IntegerField()
    character = models.CharField(max_length=100)
    order = models.IntegerField()


class Movie(models.Model):
    genre_ids = models.ManyToManyField(Genre)

    overview = models.TextField()
    popularity = models.FloatField()
    poster_path = models.CharField(max_length=200, null=True)
    release_date = models.DateField()
    title = models.CharField(max_length=100)
    vote_average = models.FloatField()
    vote_count = models.IntegerField()
    crew_ids = models.ForeignKey(
        Crew, on_delete=models.CASCADE, related_name='movies')
    cast_ids = models.ManyToManyField(Cast)
    Like_users = models.ManyToManyField(
        settings.AUTH_USER_MODEL, related_name='like_reviews')
    recommend_movies = models.TextField()
