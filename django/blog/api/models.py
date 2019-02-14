from django.db import models


class Post(models.Model):
    title = models.CharField(max_length=255)
    post = models.CharField(max_length=2048)
    # comment = models.charField(max_length=255)
    # timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class Comment(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    comment = models.CharField(max_length=255, default='SOME STRING')
    def __str__(self):
        return self.comment


