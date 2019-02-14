from rest_framework import generics
from .models import Post, IComment
from .serializers import PostSerializer, CommentSerializer


class PostAPIView(generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class PostAPIURDView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class CommentAPIURDView(generics.ListAPIView):
    serializer_class = CommentSerializer

    def get_queryset(self):
        post=Post.objects.get(pk=self.kwargs['pk'])
        return IComment.objects.filter(post=post)
