import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-covido',
  templateUrl: './covido.component.html',
  styleUrls: ['./covido.component.css']
})
export class CovidoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  goToUrl(): void {
    window.location.href = 'https://www.covido.com.ar/';
}
}
