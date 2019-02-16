import { Component, OnInit } from '@angular/core';
import { ProductosService, Producto } from "../../servicios/productos.service" ;
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: Producto[] = [];
  mostrar = false;

  constructor(private _productosService: ProductosService,
    private router: Router
  ) {
    // console.log("constructor");
  }

  ngOnInit() {
    this.productos = this._productosService.getProductos();
    // console.log(this.productos);
  }
  verProducto(idx: number) {
    // console.log(idx);
    this.router.navigate(['/producto', idx]);
  }
  cambio() {
    console.log('cambio',this.mostrar);
    if ( this.mostrar === true ) {
      this.mostrar = false;
    } else {
      this.mostrar = true;
    }
  }
}
