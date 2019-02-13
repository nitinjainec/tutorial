import { Injectable } from '@angular/core';
import { Blog } from '../app/blog';
import { Observable, of } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogUrl = 'http://localhost:3000/blog';

  constructor(private http: HttpClient) { }
  
  getBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.blogUrl)
  }
}
