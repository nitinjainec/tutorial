from rest_framework import generics
from .models import Post, Comment
from .serializers import PostSerializer, CommentSerializer


class PostAPIView(generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class PostAPIURDView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class CommentAPIURDView(generics.ListAPIView):
    queryset = Comment.objects.all ()#(pk__lt= 100)
    serializer_class = CommentSerializer
