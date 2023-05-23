from rest_framework import serializers
from .models import Genre, Cast, Movie, Comment


class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = '__all__'

class CastSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cast
        fields = '__all__'

class CommentSerializer(serializers.ModelSerializer):
    content = serializers.CharField(max_length=100)
    
    class Meta:
        model = Comment
        fields = '__all__'
        read_only_fields = ('movie',)
        
class MovieSerializer(serializers.ModelSerializer):
    
    genre_ids = GenreSerializer(many=True)
    cast_ids = CastSerializer(many=True)
    comment_set = CommentSerializer(many=True, read_only=True)
    comment_count = serializers.IntegerField(source='comment_set.count', read_only=True)
    username = serializers.CharField(source='user.username', read_only=True)

    class Meta:
        model = Movie
        fields = '__all__'
        read_only_fields = ('user', )