import { Observer } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from './user';
import { HttpClient } from '../customrequest.options';

@Injectable()
export class UserService {

  private url = "/employee";
  constructor(private httpClient: HttpClient ) { }

  getUsers():Observable<User[]> {
    return this.httpClient.get(this.url)
    .map(res => res.json());
  } 

  createUser(user: User) {
    return this.httpClient.post(this.url, JSON.stringify(user))
    .map(res => res.json());
  }

}
