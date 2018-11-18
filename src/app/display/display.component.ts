import { Component, OnInit } from '@angular/core';
import { Equipment } from "../enum/equipment/equipment";


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],

})
export class DisplayComponent implements OnInit {

  public equipment;
  constructor() { 
    this.equipment = Equipment;
  }

  ngOnInit() {
  }

}
