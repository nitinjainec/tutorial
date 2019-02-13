import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  selectedBlog: Blog

  blogs : Blog []

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.getBlogs();
  }

  getBlogs() : void {
    this.blogService.getBlogs().subscribe(
      blogs => this.blogs = blogs
    );
  }

  onSelect(blog: Blog): void {
    this.selectedBlog = blog
  }
}
