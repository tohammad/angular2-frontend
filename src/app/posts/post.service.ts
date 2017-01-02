import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Post } from './post';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class PostService {

  private url = "https://jsonplaceholder.typicode.com/posts";
  constructor(private http: Http ) { }

  getPosts(): Observable<Post[]> {
    return this.http.get(this.url)
    .map(res => res.json());
  }

  createPost(post: Post) {
    return this.http.post(this.url, JSON.stringify(post))
    .map(res => res.json());
  }

}
