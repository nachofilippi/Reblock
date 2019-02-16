import { Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ProductosService } from '../../servicios/productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',

})
export class ProductoComponent{

producto: any ={};

  constructor(private activatedRoute: ActivatedRoute,
                private _productosService: ProductosService
    ) {
            this.activatedRoute.params.subscribe(params =>{
                // console.log(params['id']);
                this.producto = this._productosService.getProducto ( params ['id']);
            })
   }



}
