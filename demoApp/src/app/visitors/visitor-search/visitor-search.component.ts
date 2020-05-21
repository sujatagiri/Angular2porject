import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-visitor-search',
  templateUrl: './visitor-search.component.html',
  styleUrls: ['./visitor-search.component.css']
})
export class VisitorSearchComponent implements OnInit {
  pageRoutedFrom:String;
  // regularVisitorbelowdata:string = 'regularv'; 
  // preregisteredbelowdata :string= 'prev';
  // outregisteredbelowdata:string = 'outv';
//visitorType:object;
  
 
  constructor(private route: ActivatedRoute) { 
    this.route.params.subscribe(param=>this.pageRoutedFrom=param['pageType']);
  }

  ngOnInit() {
    
  }

}