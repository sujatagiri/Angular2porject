import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../Services/data.service';
import { VisitorService } from '../../Services/visitor.service';
import { Visitor } from '../../Entities/visitor'


@Component({
  selector: 'app-visitor-form',
  templateUrl: './visitor-form.component.html',
  styleUrls: ['./visitor-form.component.css'],
})

export class VisitorFormComponent implements OnInit {

  itemVisitorReceived: string[] = [''];
  visitorOther: boolean = false;
  data: any;
 // visitorItemsList: Visitor[]=[];

  constructor(private dataService: DataService, private visitorService:VisitorService) {
  }

  ngOnInit() {
    this.showConfig();
  }

  showConfig() {
    this.dataService.getConfig().subscribe(result => { this.data = result; this.data = Array.of(this.data); 
      console.log(this.data); });
  }


  /**
   * Below would be called when Visitor Type Dropdown is changed. 
   * The "other" parameter would be used to on/off visibility of Other Text box.
   */
  
  visitorTypes(obj) {
    console.log(obj.value);
    this.visitorOther = (obj.value == 'visitorOther');
  }

  loadTheForm(frm) {
    console.log(frm.value);
  }

  submitForm(frm) {
    console.log(frm.value);
    Visitor result = this.dataService.addVisitor(frm);
    console.log("Reslt is : " + result);
}
}

