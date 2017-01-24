import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpClient {

  urlPrefix: string = "";
  constructor(private http: Http) {
    this.http = http;
     this.urlPrefix = 'http://localhost:5000/api';
  }

  get(url) {
    return this.http.get(this.urlPrefix + url,);
  }

  post(url, data) {

        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers,url: this.urlPrefix + url,body: data}); // Create a request option

        return this.http.post(this.urlPrefix + url, data, options) // ...using post request
                         .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any

  }
}