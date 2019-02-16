import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
// import { NosotrosComponent } from '../../nosotros/nosotros.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']

})
export class NavbarComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute
    // private nosotros: NosotrosComponent
  ) { }

  ngOnInit() {
    this.route.fragment.subscribe((fragment: string) => {
      if (fragment && document.getElementById(fragment) != null) {
        document.getElementById(fragment).scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  buscarProducto(termino: string) {
    // console.log(termino);
    this.router.navigate(['buscar', termino]);
  }

}
