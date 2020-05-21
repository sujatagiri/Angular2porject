import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent implements OnInit {
serverElements = [];
newServerName = '';
newServerContent ='';
  constructor() { }

  ngOnInit() {
  }

  onAddServer(){
    this.serverElements.push({
      type:'server',
      name:this.newServerName,
      content:this.newServerContent
    });
  }
  onAddBluePrint() {
  this.serverElements.push({
    type:'blueprint',
    name:this.newServerContent
  });
  }
}
