import { Component, OnInit, Input } from '@angular/core';
import { Blog } from '../blog'
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'

import { BlogService } from '../blog.service'



@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  @Input() blog : Blog
  comments : Comment []

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getBlog ();
  }

  getBlog() : void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.blogService.getBlogs().subscribe (
      blog => {
        for (let b of blog) {
          if (b.id == id)
            this.blog = b
        }
      }
    )
  }

  getComments() : void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.blogService.getComments(id).subscribe(
      comments => this.comments = comments
    );
  }

  goBack(): void {
    this.location.back ()
  }

}
