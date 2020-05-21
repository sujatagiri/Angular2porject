import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-visitor-detail-page',
  templateUrl: './visitor-detail-page.component.html',
  styleUrls: ['./visitor-detail-page.component.css']
})
export class VisitorDetailPageComponent implements OnInit {

  pageRoutedFrom:String;
  // regularVisitorbelowdata:string = 'regularv'; 
  // preregisteredbelowdata :string= 'prev';
  // outregisteredbelowdata:string = 'outv';
//visitorType:object;
   getSelectedComponent(param)
  {
    return (this.pageRoutedFrom==param);
  }

  HideForRegularVisitor()
  {
    return (this.pageRoutedFrom!='regular');
  }
 
  constructor(private route: ActivatedRoute) { 
    this.route.params.subscribe(param=>this.pageRoutedFrom=param['pageType']);
  }

  ngOnInit() {
    
  }

}
