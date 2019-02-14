from rest_framework import serializers
from .models import Post, IComment


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = IComment
        fields = '__all__'

