import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
   x = 5;
   name = 'edgar';
   Date = '2019-09-07';

  constructor() { }

  ngOnInit() {
  }

}
