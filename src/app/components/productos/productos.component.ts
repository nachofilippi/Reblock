import { Component, OnInit } from '@angular/core';
import { ProductosService, Producto } from '../../servicios/productos.service' ;
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: Producto[] = [];
  bloqueActivo: boolean = true;
  bloqueUActivo: boolean = false;
  dintelActivo: boolean = false;
  herramientaActivo: boolean = false;
  todosActivo: boolean = false;
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

  activarBloque() {
    this.bloqueActivo = true;
    this.bloqueUActivo = false;
    this.dintelActivo = false;
    this.herramientaActivo = false;
    this.todosActivo = false;
    console.log('bloque activo', this.bloqueActivo);
  }

  activarBloqueU() {
    this.bloqueActivo = false;
    this.bloqueUActivo = true;
    this.dintelActivo = false;
    this.herramientaActivo = false;
    this.todosActivo = false;
  }
  activarDintel() {
    this.bloqueActivo = false;
    this.bloqueUActivo = false;
    this.dintelActivo = true;
    this.herramientaActivo = false;
    this.todosActivo = false;
  }
  activarHerramienta() {
    this.bloqueActivo = false;
    this.bloqueUActivo = false;
    this.dintelActivo = false;
    this.herramientaActivo = true;
    this.todosActivo = false;
  }
  activarTodos() {
    this.bloqueActivo = false;
    this.bloqueUActivo = false;
    this.dintelActivo = false;
    this.herramientaActivo = false;
    this.todosActivo = true;
  }
}
