from django.db import models
from django.conf import settings


class Genre(models.Model):
    name = models.CharField(max_length=50)

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
    cast_ids = models.ManyToManyField(Cast)
    Like_users = models.ManyToManyField(
        settings.AUTH_USER_MODEL, related_name='like_movies', blank=True)
    recommend_movies = models.TextField()
    # def __str__(self):
    #     return self.title

class Comment(models.Model):
    content = models.CharField(max_length=100)
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    # user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)