import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars-page',
  templateUrl: './cars-page.component.html',
  styleUrls: ['./cars-page.component.css']
})
export class CarsPageComponent implements OnInit {

   FilterCar = '';
  cars = [
    {
      model: 'ford',
      year: 1967,
      color: 'red'

    },

    {
      model: 'opel',
      year: 2002,
      color: 'green'
    },
    {
      model: 'bmw',
      year: 2003,
      color: 'blue',
    }

  ];


  constructor() { }

  ngOnInit() {
  }

}
