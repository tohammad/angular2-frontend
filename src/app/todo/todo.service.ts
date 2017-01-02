import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ToDo } from './todo';

@Injectable()
export class TodoService {

  private url = "https://jsonplaceholder.typicode.com/todos";
  constructor(private http: Http ) { }

  getToDos(): Observable<ToDo[]> {
    return this.http.get(this.url)
    .map(res => res.json());
  }

  createToDo(post: ToDo) {
    return this.http.post(this.url, JSON.stringify(post))
    .map(res => res.json());
  }

}
