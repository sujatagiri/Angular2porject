import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Visitor } from '../Entities/visitor';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})

export class DataService {

  configUrl = 'http://192.168.0.105:3000/API/VISITOR';
  //public url= 'https://jsonplaceholder.typicode.com/posts/1';

  constructor(private http: HttpClient) {

  }

  getConfig() {
    return this.http.get(this.configUrl);
  }

  addVisitor(visitorObject: Visitor): Observable<Visitor> {
    return this.http.post<Visitor>(this.configUrl + "/add", visitorObject, httpOptions);
  }

}