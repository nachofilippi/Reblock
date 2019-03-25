import { Component, OnInit } from '@angular/core';
import { ProductosService, Producto } from '../../servicios/productos.service';
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
  value: any;

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
  changeFunc(value) {
    let selectBox = (<HTMLInputElement>document.getElementById('selectBox')).value;
    switch (selectBox) {
      case 'todos': {
        this.activarTodos();
        break;
      }
      case 'bloques': {
        this.activarBloque();
        break;
      }
      case 'dinteles': {
        this.activarDintel();
        break;
      }
      case 'bloquesU': {
        this.activarBloqueU();
        break;
      }
      case 'herramientas': {
        this.activarHerramienta();
        break;
      }

    }
  }
}
