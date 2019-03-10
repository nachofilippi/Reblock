import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ref-asesoramiento',
  templateUrl: './ref-asesoramiento.component.html',
  styleUrls: ['./ref-asesoramiento.component.css']
})
export class RefAsesoramientoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  btnClick = function () {
    this.router.navigateByUrl('asesoramiento');
  };
}
