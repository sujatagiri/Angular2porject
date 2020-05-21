import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
//import '../../../rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})

export class VisitorService {

  constructor(private http:HttpClient) {

   }



//  visitorgetItems(){
//      return this.http.get('http://192.168.0.103:3000/api/visitor'); }
    //  .this.myObservable().map(data => {})
    //  .pipe(map((response: any) => response.json()));
  
  //  .map(res => res.json());
  //  .pipe(map((response: any) => response.json()));

//  visitoraddItem(newItem){
//      let headers = new Headers();
//      headers.append('content-Type','application/json');
//      return this.http.post('http://192.168.0.103:3000/API/VISITOR', newItem, {headers:headers});
//     }

  
   // .map(res => res.json());
  }
