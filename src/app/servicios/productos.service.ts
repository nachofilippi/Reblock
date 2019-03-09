import { Injectable } from '@angular/core';

@Injectable()
export class ProductosService {

  private productos: Producto[] = [
    {
      Nombre: 'BLOQUE MACIZO',
      Altura: 'Altura: 25cm',
      Longitud: 'Longitud: 60cm',
      Ancho: 'Ancho: 7.5cm',
      Img: 'assets/img/bloque7.png',
      Descripcion: 'Ladrillo de concreto celular liviano',
      Tipo: 'Bloque'
    },
    {
      Nombre: 'BLOQUE MACIZO',
      Altura: 'Altura: 25cm',
      Longitud: 'Longitud: 60cm',
      Ancho: 'Ancho: 10cm',
      Img: 'assets/img/bloque10.png',
      Descripcion: 'Ladrillo de concreto celular liviano',
      Tipo: 'Bloque'
    },
    {
      Nombre: 'BLOQUE MACIZO',
      Altura: 'Altura: 25cm',
      Longitud: 'Longitud: 60cm',
      Ancho: 'Ancho: 15cm',
      Img: 'assets/img/bloque15.png',
      Descripcion: 'Ladrillo de concreto celular liviano',
      Tipo: 'Bloque'
    },
    {
      Nombre: 'BLOQUE MACIZO',
      Altura: 'Altura: 25cm',
      Longitud: 'Longitud: 60cm',
      Ancho: 'Ancho: 20cm',
      Img: 'assets/img/bloque20.png',
      Descripcion: 'Ladrillo de concreto celular liviano',
      Tipo: 'Bloque'
    },
    {
      Nombre: 'DINTEL ',
      Altura: 'Altura: 25cm',
      Longitud: 'Longitud: 150cm/200cm',
      Ancho: 'Ancho: 10cm',
      Img: 'assets/img/dintel10.png',
      Descripcion: 'Ladrillo de concreto celular liviano',
      Tipo: 'Dintel'
    },
    {
      Nombre: 'DINTEL ',
      Altura: 'Altura: 25cm',
      Longitud: 'Longitud: 150cm/200cm/250cm',
      Ancho: 'Ancho: 15cm',
      Img: 'assets/img/dintel15.png',
      Descripcion: 'Ladrillo de concreto celular liviano',
      Tipo: 'Dintel'
    },
    {
      Nombre: 'DINTEL ',
      Altura: 'Altura: 25cm',
      Longitud: 'Longitud: 150cm/200cm/250cm',
      Ancho: 'Ancho: 20cm',
      Img: 'assets/img/dintel20.png',
      Descripcion: 'Ladrillo de concreto celular liviano',
      Tipo: 'Dintel'
    },
    {
      Nombre: 'BLOQUE \'U\' ',
      Altura: 'Altura: 25cm',
      Longitud: 'Longitud: 60cm',
      Ancho: 'Ancho: 15cm',
      Img: 'assets/img/bloqueU15.png',
      Descripcion: 'Ladrillo de concreto celular liviano',
      Tipo: 'BloqueU'
    },
    {
      Nombre: 'BLOQUE \'U\' ',
      Altura: 'Altura: 25cm',
      Longitud: 'Longitud: 60cm',
      Ancho: 'Ancho: 20cm',
      Img: 'assets/img/bloqueU20.png',
      Descripcion: 'Ladrillo de concreto celular liviano',
      Tipo: 'BloqueU'
    },
    {
      Nombre: 'MAZA DE GOMA',
      Altura: '',
      Longitud: '',
      Ancho: '',
      Img: 'assets/img/maza.png',
      Descripcion: 'Evita el ruido excesivo y garantiza la vida del remachador.',
      Tipo: 'Herramienta'
    },
    {
      Nombre: 'FRATACHO DE PIEDRA',
      Altura: '',
      Longitud: '',
      Ancho: '',
      Img: 'assets/img/fratacho.png',
      Descripcion: 'Mampostería,cerámicos y ladrillos.',
      Tipo: 'Herramienta'
    },
    {
      Nombre: 'RASQUETA',
      Altura: '',
      Longitud: '',
      Ancho: '',
      Img: 'assets/img/espatula.png',
      Descripcion: 'Lámina de acero profesional de multiuso.',
      Tipo: 'Herramienta'
    },
    {
      Nombre: 'CUCHARA',
      Altura: '',
      Longitud: '',
      Ancho: '',
      Img: 'assets/img/pala.png',
      Descripcion: 'Mango de madera y empuñadura de hierro.',
      Tipo: 'Herramienta'
    },
    {
      Nombre: 'MALLA REFORZADA',
      Altura: '',
      Longitud: '',
      Ancho: '',
      Img: 'assets/img/malla.png',
      Descripcion: 'Material de construcción de hierro utilizado en obras.',
      Tipo: 'Herramienta'
    },
    {
      Nombre: 'SERRUCHO',
      Altura: '',
      Longitud: '',
      Ancho: '',
      Img: 'assets/img/serrucho.png',
      Descripcion: 'Lamina de acero y mango de madera.',
      Tipo: 'Herramienta'
    }
  ];


  constructor() {
    // console.log('Servicio listo!!');
  }

  getProductos(): Producto[] {
    return this.productos;
  }
  getProducto( idx: string) {

      return this.productos [idx];
  }

  buscarProducto ( termino: string ) {

      const productosArr: Producto[] = [];
      termino = termino.toLowerCase();

      for ( const producto of this.productos ) {
          const Nombre = producto.Nombre.toLowerCase();
          if (Nombre.indexOf( termino ) >= 0 ) {
              productosArr.push(producto);
          }
      }
      return productosArr;
  }

}

export interface Producto {
  Nombre: string;
  Altura: string;
  Longitud: string;
  Ancho: string;
  Img: string;
  Descripcion: string;
  Tipo: string;
}
