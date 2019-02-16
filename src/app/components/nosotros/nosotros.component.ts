import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  btnClick = function () {
    this.router.navigateByUrl('covido');
  };
}
