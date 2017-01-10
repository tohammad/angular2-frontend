import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class HttpClient {

  urlPrefix: string = "";
  constructor(private http: Http) {
    this.http = http;
    // this.urlPrefix = 'http://localhost:5000/api';
  }

  get(url) {
    return this.http.get(this.urlPrefix + url,);
  }

  post(url, data) {
    return this.http.post(this.urlPrefix + url, data);
  }
}