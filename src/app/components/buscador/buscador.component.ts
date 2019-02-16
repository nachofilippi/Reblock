import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductosService} from '../../servicios/productos.service';
import { Router }  from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
})
export class BuscadorComponent implements OnInit {

    producto:any[] = []
    productos:any[] = []
    termino:string;

  constructor( private activatedRoute:ActivatedRoute,
                private _productosService:ProductosService,
                private router: Router) {
                        this.activatedRoute.params.subscribe(params =>{
                            // console.log(params['id']);
                            this.producto = this._productosService.getProducto ( params ['id']);
                        })
               }


  ngOnInit() {

      this.activatedRoute.params.subscribe(params=>{
          // console.log(params['termino']);
          this.termino= params['termino'];
          this.productos =this._productosService.buscarProducto( params['termino']);
          console.log(this.productos);
      });
  }

  verProducto( idx: number ){
    // console.log(idx);
    this.router.navigate(['/producto',idx]);
  }

}
