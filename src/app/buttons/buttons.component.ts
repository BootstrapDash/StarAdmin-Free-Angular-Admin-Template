import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonsComponent implements OnInit {
  model = 1;
  checkboxModel = {
   left: true,
   middle: false,
   right: false
 };
  constructor() { }

  ngOnInit() {
  }

}
