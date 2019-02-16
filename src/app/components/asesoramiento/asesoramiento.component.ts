import { Component } from '@angular/core';

@Component({
  selector: 'app-asesoramiento',
  templateUrl: './asesoramiento.component.html',
  styleUrls: ['./asesoramiento.component.css']
})
export class AsesoramientoComponent {

  largo_P1: HTMLInputElement;
  ancho_P1: HTMLInputElement;
  largo_P2: HTMLInputElement;
  ancho_P2: HTMLInputElement;
  largo_P3: HTMLInputElement;
  ancho_P3: HTMLInputElement;
  largo_P4: HTMLInputElement;
  ancho_P4: HTMLInputElement;
  largo_P5: HTMLInputElement;
  ancho_P5: HTMLInputElement;

  ancho_A1_P1: HTMLInputElement;
  alto_A1_P1: HTMLInputElement;
  ancho_A2_P1: HTMLInputElement;
  alto_A2_P1: HTMLInputElement;
  ancho_A3_P1: HTMLInputElement;
  alto_A3_P1: HTMLInputElement;
  ancho_A4_P1: HTMLInputElement;
  alto_A4_P1: HTMLInputElement;
  ancho_A5_P1: HTMLInputElement;
  alto_A5_P1: HTMLInputElement;

  ancho_A1_P2: HTMLInputElement;
  alto_A1_P2: HTMLInputElement;
  ancho_A2_P2: HTMLInputElement;
  alto_A2_P2: HTMLInputElement;
  ancho_A3_P2: HTMLInputElement;
  alto_A3_P2: HTMLInputElement;
  ancho_A4_P2: HTMLInputElement;
  alto_A4_P2: HTMLInputElement;
  ancho_A5_P2: HTMLInputElement;
  alto_A5_P2: HTMLInputElement;

  ancho_A1_P3: HTMLInputElement;
  alto_A1_P3: HTMLInputElement;
  ancho_A2_P3: HTMLInputElement;
  alto_A2_P3: HTMLInputElement;
  ancho_A3_P3: HTMLInputElement;
  alto_A3_P3: HTMLInputElement;
  ancho_A4_P3: HTMLInputElement;
  alto_A4_P3: HTMLInputElement;
  ancho_A5_P3: HTMLInputElement;
  alto_A5_P3: HTMLInputElement;

  ancho_A1_P4: HTMLInputElement;
  alto_A1_P4: HTMLInputElement;
  ancho_A2_P4: HTMLInputElement;
  alto_A2_P4: HTMLInputElement;
  ancho_A3_P4: HTMLInputElement;
  alto_A3_P4: HTMLInputElement;
  ancho_A4_P4: HTMLInputElement;
  alto_A4_P4: HTMLInputElement;
  ancho_A5_P4: HTMLInputElement;
  alto_A5_P4: HTMLInputElement;

  ancho_A1_P5: HTMLInputElement;
  alto_A1_P5: HTMLInputElement;
  ancho_A2_P5: HTMLInputElement;
  alto_A2_P5: HTMLInputElement;
  ancho_A3_P5: HTMLInputElement;
  alto_A3_P5: HTMLInputElement;
  ancho_A4_P5: HTMLInputElement;
  alto_A4_P5: HTMLInputElement;
  ancho_A5_P5: HTMLInputElement;
  alto_A5_P5: HTMLInputElement;

  // areas muros
  AreaMuroP1: number ;
  AreaMuroP2: number ;
  AreaMuroP3: number ;
  AreaMuroP4: number ;
  AreaMuroP5: number ;

  // aberturas
  // 1
  AreaA1P1: number;
  AreaA2P1: number;
  AreaA3P1: number;
  AreaA4P1: number;
  AreaA5P1: number;
  // 2
  AreaA1P2: number;
  AreaA2P2: number;
  AreaA3P2: number;
  AreaA4P2: number;
  AreaA5P2: number;
  // 3
  AreaA1P3: number;
  AreaA2P3: number;
  AreaA3P3: number;
  AreaA4P3: number;
  AreaA5P3: number;
  // 4
  AreaA1P4: number;
  AreaA2P4: number;
  AreaA3P4: number;
  AreaA4P4: number;
  AreaA5P4: number;
  // 5
  AreaA1P5: number;
  AreaA2P5: number;
  AreaA3P5: number;
  AreaA4P5: number;
  AreaA5P5: number;

  // area final
  AreaTotalP1: number;
  AreaTotalP2: number;
  AreaTotalP3: number;
  AreaTotalP4: number;
  AreaTotalP5: number;

  constructor() {
    // muro
    this.largo_P1 = <HTMLInputElement>document.getElementById("largo_P1");
    this.ancho_P1 = <HTMLInputElement>document.getElementById("ancho_P1");
    this.largo_P2 = <HTMLInputElement>document.getElementById("largo_P2");
    this.ancho_P2 = <HTMLInputElement>document.getElementById("ancho_P2");
    this.largo_P3 = <HTMLInputElement>document.getElementById("largo_P3");
    this.ancho_P3 = <HTMLInputElement>document.getElementById("ancho_P3");
    this.largo_P4 = <HTMLInputElement>document.getElementById("largo_P4");
    this.ancho_P5 = <HTMLInputElement>document.getElementById("ancho_P5");
    // abertura 1
    this.ancho_A1_P1 = <HTMLInputElement>document.getElementById("ancho_A1_P1");
    this.alto_A1_P1 = <HTMLInputElement>document.getElementById("alto_A1_P1");
    this.ancho_A2_P1 = <HTMLInputElement>document.getElementById("ancho_A2_P1");
    this.alto_A2_P1 = <HTMLInputElement>document.getElementById("alto_A2_P1");
    this.ancho_A3_P1 = <HTMLInputElement>document.getElementById("ancho_A3_P1");
    this.alto_A3_P1 = <HTMLInputElement>document.getElementById("alto_A3_P1");
    this.ancho_A4_P1 = <HTMLInputElement>document.getElementById("ancho_A4_P1");
    this.alto_A4_P1 = <HTMLInputElement>document.getElementById("alto_A4_P1");
    this.ancho_A5_P1 = <HTMLInputElement>document.getElementById("ancho_A5_P1");
    this.alto_A5_P1 = <HTMLInputElement>document.getElementById("alto_A5_P1");
    // abertura 2
    this.ancho_A1_P2 = <HTMLInputElement>document.getElementById("ancho_A1_P2");
    this.alto_A1_P2 = <HTMLInputElement>document.getElementById("alto_A1_P2");
    this.ancho_A2_P2 = <HTMLInputElement>document.getElementById("ancho_A2_P2");
    this.alto_A2_P2 = <HTMLInputElement>document.getElementById("alto_A2_P2");
    this.ancho_A3_P2 = <HTMLInputElement>document.getElementById("ancho_A3_P2");
    this.alto_A3_P2 = <HTMLInputElement>document.getElementById("alto_A3_P2");
    this.ancho_A4_P2 = <HTMLInputElement>document.getElementById("ancho_A4_P2");
    this.alto_A4_P2 = <HTMLInputElement>document.getElementById("alto_A4_P2");
    this.ancho_A5_P2 = <HTMLInputElement>document.getElementById("ancho_A5_P2");
    this.alto_A5_P2 = <HTMLInputElement>document.getElementById("alto_A5_P2");
    // abertura 3
    this.ancho_A1_P3 = <HTMLInputElement>document.getElementById("ancho_A1_P3");
    this.alto_A1_P3 = <HTMLInputElement>document.getElementById("alto_A1_P3");
    this.ancho_A2_P3 = <HTMLInputElement>document.getElementById("ancho_A2_P3");
    this.alto_A2_P3 = <HTMLInputElement>document.getElementById("alto_A2_P3");
    this.ancho_A3_P3 = <HTMLInputElement>document.getElementById("ancho_A3_P3");
    this.alto_A3_P3 = <HTMLInputElement>document.getElementById("alto_A3_P3");
    this.ancho_A4_P3 = <HTMLInputElement>document.getElementById("ancho_A4_P3");
    this.alto_A4_P3 = <HTMLInputElement>document.getElementById("alto_A4_P3");
    this.ancho_A5_P3 = <HTMLInputElement>document.getElementById("ancho_A5_P3");
    this.alto_A5_P3 = <HTMLInputElement>document.getElementById("alto_A5_P3");
    // abertura 4
    this.ancho_A1_P4 = <HTMLInputElement>document.getElementById("ancho_A1_P4");
    this.alto_A1_P4 = <HTMLInputElement>document.getElementById("alto_A1_P4");
    this.ancho_A2_P4 = <HTMLInputElement>document.getElementById("ancho_A2_P4");
    this.alto_A2_P4 = <HTMLInputElement>document.getElementById("alto_A2_P4");
    this.ancho_A3_P4 = <HTMLInputElement>document.getElementById("ancho_A3_P4");
    this.alto_A3_P4 = <HTMLInputElement>document.getElementById("alto_A3_P4");
    this.ancho_A4_P4 = <HTMLInputElement>document.getElementById("ancho_A4_P4");
    this.alto_A4_P4 = <HTMLInputElement>document.getElementById("alto_A4_P4");
    this.ancho_A5_P4 = <HTMLInputElement>document.getElementById("ancho_A5_P4");
    this.alto_A5_P4 = <HTMLInputElement>document.getElementById("alto_A5_P4");
    // abertura 5
    this.ancho_A1_P5 = <HTMLInputElement>document.getElementById("ancho_A1_P5");
    this.alto_A1_P5 = <HTMLInputElement>document.getElementById("alto_A1_P5");
    this.ancho_A2_P5 = <HTMLInputElement>document.getElementById("ancho_A2_P5");
    this.alto_A2_P5 = <HTMLInputElement>document.getElementById("alto_A2_P5");
    this.ancho_A3_P5 = <HTMLInputElement>document.getElementById("ancho_A3_P5");
    this.alto_A3_P5 = <HTMLInputElement>document.getElementById("alto_A3_P5");
    this.ancho_A4_P5 = <HTMLInputElement>document.getElementById("ancho_A4_P5");
    this.alto_A4_P5 = <HTMLInputElement>document.getElementById("alto_A4_P5");
    this.ancho_A5_P5 = <HTMLInputElement>document.getElementById("ancho_A5_P5");
    this.alto_A5_P5 = <HTMLInputElement>document.getElementById("alto_A5_P5");
  }

  public calcularTotalArea() {
    // muro1
    this.AreaMuroP1 = parseFloat(this.largo_P1.value) * parseFloat(this.ancho_P1.value);
    this.AreaA1P1 = parseFloat(this.ancho_A1_P1.value) * parseFloat(this.alto_A1_P1.value);
    this.AreaA2P1 = parseFloat(this.ancho_A2_P1.value) * parseFloat(this.alto_A2_P1.value);
    this.AreaA3P1 = parseFloat(this.ancho_A3_P1.value) * parseFloat(this.alto_A3_P1.value);
    this.AreaA4P1 = parseFloat(this.ancho_A4_P1.value) * parseFloat(this.alto_A4_P1.value);
    this.AreaA5P1 = parseFloat(this.ancho_A5_P1.value) * parseFloat(this.alto_A5_P1.value);

    this.AreaTotalP1 = this.AreaMuroP1 - this.AreaA1P1 - this.AreaA2P1 - this.AreaA3P1 - this.AreaA4P1 - this.AreaA5P1;
    // parseFloat(document.getElementById("areatotalp1").nodeValue) = this.AreaTotalP1;
    // muro2
    this.AreaMuroP2 = parseFloat(this.largo_P2.value) * parseFloat(this.ancho_P2.value);
    this.AreaA1P2 = parseFloat(this.ancho_A1_P2.value) * parseFloat(this.alto_A1_P2.value);
    this.AreaA2P2 = parseFloat(this.ancho_A2_P2.value) * parseFloat(this.alto_A2_P2.value);
    this.AreaA3P2 = parseFloat(this.ancho_A3_P2.value) * parseFloat(this.alto_A3_P2.value);
    this.AreaA4P2 = parseFloat(this.ancho_A4_P2.value) * parseFloat(this.alto_A4_P2.value);
    this.AreaA5P2 = parseFloat(this.ancho_A5_P2.value) * parseFloat(this.alto_A5_P2.value);

    // muro3
    this.AreaMuroP1 = parseFloat(this.largo_P3.value) * parseFloat(this.ancho_P3.value);
    this.AreaA1P3 = parseFloat(this.ancho_A1_P3.value) * parseFloat(this.alto_A1_P3.value);
    this.AreaA2P3 = parseFloat(this.ancho_A2_P3.value) * parseFloat(this.alto_A2_P3.value);
    this.AreaA3P3 = parseFloat(this.ancho_A3_P3.value) * parseFloat(this.alto_A3_P3.value);
    this.AreaA4P3 = parseFloat(this.ancho_A4_P3.value) * parseFloat(this.alto_A4_P3.value);
    this.AreaA5P3 = parseFloat(this.ancho_A5_P3.value) * parseFloat(this.alto_A5_P3.value);

    // muro4
    this.AreaMuroP4 = parseFloat(this.largo_P4.value) * parseFloat(this.ancho_P4.value);
    this.AreaA1P4 = parseFloat(this.ancho_A1_P4.value) * parseFloat(this.alto_A1_P4.value);
    this.AreaA2P4 = parseFloat(this.ancho_A2_P4.value) * parseFloat(this.alto_A2_P4.value);
    this.AreaA3P4 = parseFloat(this.ancho_A3_P4.value) * parseFloat(this.alto_A3_P4.value);
    this.AreaA4P4 = parseFloat(this.ancho_A4_P4.value) * parseFloat(this.alto_A4_P4.value);
    this.AreaA5P4 = parseFloat(this.ancho_A5_P4.value) * parseFloat(this.alto_A5_P4.value);

    // muro5
    this.AreaMuroP5 = parseFloat(this.largo_P5.value) * parseFloat(this.ancho_P5.value);
    this.AreaA1P5 = parseFloat(this.ancho_A1_P5.value) * parseFloat(this.alto_A1_P5.value);
    this.AreaA2P5 = parseFloat(this.ancho_A2_P5.value) * parseFloat(this.alto_A2_P5.value);
    this.AreaA3P5 = parseFloat(this.ancho_A3_P5.value) * parseFloat(this.alto_A3_P5.value);
    this.AreaA4P5 = parseFloat(this.ancho_A4_P5.value) * parseFloat(this.alto_A4_P5.value);
    this.AreaA5P5 = parseFloat(this.ancho_A5_P5.value) * parseFloat(this.alto_A5_P5.value);

  }

  // private pasarFloat(){
  //   return parseFloat(this.)
  // }




}
