import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-material-tabs',
  templateUrl: './material-tabs.component.html',
  styleUrls: ['./material-tabs.component.css']
})
export class MaterialTabsComponent implements OnInit {

  


  constructor() { 
    
  }

  

  

  tabs = ['First', 'Second', 'Third'];
  selected = new FormControl(0);

  addTab(selectAfterAdding: boolean) {
    this.tabs.push('New');

    if (selectAfterAdding) {
      this.selected.setValue(this.tabs.length - 1);
    }
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }
  
  

  ngOnInit() {
    
  }



 

}
