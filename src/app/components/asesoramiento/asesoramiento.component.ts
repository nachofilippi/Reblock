import { Component } from '@angular/core';


@Component({
  selector: 'app-asesoramiento',
  templateUrl: './asesoramiento.component.html',
  styleUrls: ['./asesoramiento.component.css']
})
export class AsesoramientoComponent {

  // area de paredes
  largo_P1: number = 0;
  ancho_P1: number = 0;
  largo_P2: number = 0;
  ancho_P2: number = 0;
  largo_P3: number = 0;
  ancho_P3: number = 0;
  largo_P4: number = 0;
  ancho_P4: number = 0;
  largo_P5: number = 0;
  ancho_P5: number = 0;

  // area de aberturas pared 1
  alto_A1_P1: number = 0;
  ancho_A1_P1: number = 0;
  alto_A2_P1: number = 0;
  ancho_A2_P1: number = 0;
  alto_A3_P1: number = 0;
  ancho_A3_P1: number = 0;
  alto_A4_P1: number = 0;
  ancho_A4_P1: number = 0;

  // area de aberturas pared 2
  alto_A1_P2: number = 0;
  ancho_A1_P2: number = 0;
  alto_A2_P2: number = 0;
  ancho_A2_P2: number = 0;
  alto_A3_P2: number = 0;
  ancho_A3_P2: number = 0;
  alto_A4_P2: number = 0;
  ancho_A4_P2: number = 0;

  // area de aberturas pared 3
  alto_A1_P3: number = 0;
  ancho_A1_P3: number = 0;
  alto_A2_P3: number = 0;
  ancho_A2_P3: number = 0;
  alto_A3_P3: number = 0;
  ancho_A3_P3: number = 0;
  alto_A4_P3: number = 0;
  ancho_A4_P3: number = 0;

  // area de aberturas pared 4
  alto_A1_P4: number = 0;
  ancho_A1_P4: number = 0;
  alto_A2_P4: number = 0;
  ancho_A2_P4: number = 0;
  alto_A3_P4: number = 0;
  ancho_A3_P4: number = 0;
  alto_A4_P4: number = 0;
  ancho_A4_P4: number = 0;

  // area de aberturas pared 5
  alto_A1_P5: number = 0;
  ancho_A1_P5: number = 0;
  alto_A2_P5: number = 0;
  ancho_A2_P5: number = 0;
  alto_A3_P5: number = 0;
  ancho_A3_P5: number = 0;
  alto_A4_P5: number = 0;
  ancho_A4_P5: number = 0;

  // areas de acuerdo al espesor y tipo
  Portante_AreaTotalE7: number = 0;
  Portante_AreaTotalE10: number = 0;
  Portante_AreaTotalE15: number = 0;
  Portante_AreaTotalE20: number = 0;

  NoPortante_AreaTotalE7: number = 0;
  NoPortante_AreaTotalE10: number = 0;
  NoPortante_AreaTotalE15: number = 0;
  NoPortante_AreaTotalE20: number = 0;

  // areas html
  areatotalp4: number = 0;
  areatotalp1: number = 0;
  areatotalp2: number = 0;
  areatotalp3: number = 0;
  areatotalp5: number = 0;

  bloquenp7: number = 0;
  palletnp7: number = 0;
  bloquep7: number = 0;
  palletp7: number = 0;
  bloquep10: number = 0;
  palletp10: number = 0;
  bloquenp10: number = 0;
  palletnp10: number = 0;
  bloquep15: number = 0;
  palletp15: number = 0;
  bloquenp15: number = 0;
  palletnp15: number = 0;
  bloquep20: number = 0;
  palletp20: number = 0;
  bloquenp20: number = 0;
  palletnp20: number = 0;


  constructor() {

  }

  calcularTotalArea() {
    // ==========================================================
    // INICIALIZACION DE VARIABLES
    // ==========================================================
    this.bloquenp7 = 0;
    this.palletnp7 = 0;
    this.bloquep7 = 0;
    this.palletp7 = 0;
    this.bloquep10 = 0;
    this.palletp10 = 0;
    this.bloquenp10 = 0;
    this.palletnp10 = 0;
    this.bloquep15 = 0;
    this.palletp15 = 0;
    this.bloquenp15 = 0;
    this.palletnp15 = 0;
    this.bloquep20 = 0;
    this.palletp20 = 0;
    this.bloquenp20 = 0;
    this.palletnp20 = 0;

    this.Portante_AreaTotalE7  = 0;
    this.Portante_AreaTotalE10  = 0;
    this.Portante_AreaTotalE15  = 0;
    this.Portante_AreaTotalE20  = 0;
    this.NoPortante_AreaTotalE7  = 0;
    this.NoPortante_AreaTotalE10  = 0;
    this.NoPortante_AreaTotalE15  = 0;
    this.NoPortante_AreaTotalE20  = 0;

    // ==========================================================
    // AREA DE PAREDES
    // ==========================================================

    this.largo_P1 = parseInt((<HTMLInputElement>document.getElementById('largo_P1')).value);

    this.ancho_P1 = parseInt((<HTMLInputElement>document.getElementById('ancho_P1')).value);

    this.largo_P2 = parseInt((<HTMLInputElement>document.getElementById('largo_P2')).value);

    this.ancho_P2 = parseInt((<HTMLInputElement>document.getElementById('ancho_P2')).value);

    this.largo_P3 = parseInt((<HTMLInputElement>document.getElementById('largo_P3')).value);

    this.ancho_P3 = parseInt((<HTMLInputElement>document.getElementById('ancho_P3')).value);

    this.largo_P4 = parseInt((<HTMLInputElement>document.getElementById('largo_P4')).value);

    this.ancho_P4 = parseInt((<HTMLInputElement>document.getElementById('ancho_P4')).value);

    this.largo_P5 = parseInt((<HTMLInputElement>document.getElementById('largo_P5')).value);

    this.ancho_P5 = parseInt((<HTMLInputElement>document.getElementById('ancho_P5')).value);

    // ==========================================================
    // AREA DE ABERTURAS PARED 1
    // ==========================================================

    this.alto_A1_P1 = parseInt((<HTMLInputElement>document.getElementById('alto_A1_P1')).value);

    this.ancho_A1_P1 = parseInt((<HTMLInputElement>document.getElementById('ancho_A1_P1')).value);

    this.alto_A2_P1 = parseInt((<HTMLInputElement>document.getElementById('alto_A2_P1')).value);

    this.ancho_A2_P1 = parseInt((<HTMLInputElement>document.getElementById('ancho_A2_P1')).value);

    this.alto_A3_P1 = parseInt((<HTMLInputElement>document.getElementById('alto_A3_P1')).value);

    this.ancho_A3_P1 = parseInt((<HTMLInputElement>document.getElementById('ancho_A3_P1')).value);

    this.alto_A4_P1 = parseInt((<HTMLInputElement>document.getElementById('alto_A4_P1')).value);

    this.ancho_A4_P1 = parseInt((<HTMLInputElement>document.getElementById('ancho_A4_P1')).value);

    // ==========================================================
    // AREA DE ABERTURAS PARED 2
    // ==========================================================

    this.alto_A1_P2 = parseInt((<HTMLInputElement>document.getElementById('alto_A1_P2')).value);

    this.ancho_A1_P2 = parseInt((<HTMLInputElement>document.getElementById('ancho_A1_P2')).value);

    this.alto_A2_P2 = parseInt((<HTMLInputElement>document.getElementById('alto_A2_P2')).value);

    this.ancho_A2_P2 = parseInt((<HTMLInputElement>document.getElementById('ancho_A2_P2')).value);

    this.alto_A3_P2 = parseInt((<HTMLInputElement>document.getElementById('alto_A3_P2')).value);

    this.ancho_A3_P2 = parseInt((<HTMLInputElement>document.getElementById('ancho_A3_P2')).value);

    this.alto_A4_P2 = parseInt((<HTMLInputElement>document.getElementById('alto_A4_P2')).value);

    this.ancho_A4_P2 = parseInt((<HTMLInputElement>document.getElementById('ancho_A4_P2')).value);

    // ==========================================================
    // AREA DE ABERTURAS PARED 3
    // ==========================================================

    this.alto_A1_P3 = parseInt((<HTMLInputElement>document.getElementById('alto_A1_P3')).value);

    this.ancho_A1_P3 = parseInt((<HTMLInputElement>document.getElementById('ancho_A1_P3')).value);

    this.alto_A2_P3 = parseInt((<HTMLInputElement>document.getElementById('alto_A2_P3')).value);

    this.ancho_A2_P3 = parseInt((<HTMLInputElement>document.getElementById('ancho_A2_P3')).value);

    this.alto_A3_P3 = parseInt((<HTMLInputElement>document.getElementById('alto_A3_P3')).value);

    this.ancho_A3_P3 = parseInt((<HTMLInputElement>document.getElementById('ancho_A3_P3')).value);

    this.alto_A4_P3 = parseInt((<HTMLInputElement>document.getElementById('alto_A4_P3')).value);

    this.ancho_A4_P3 = parseInt((<HTMLInputElement>document.getElementById('ancho_A4_P3')).value);

    // ==========================================================
    // AREA DE ABERTURAS PARED 4
    // ==========================================================

    this.alto_A1_P4 = parseInt((<HTMLInputElement>document.getElementById('alto_A1_P4')).value);

    this.ancho_A1_P4 = parseInt((<HTMLInputElement>document.getElementById('ancho_A1_P4')).value);

    this.alto_A2_P4 = parseInt((<HTMLInputElement>document.getElementById('alto_A2_P4')).value);

    this.ancho_A2_P4 = parseInt((<HTMLInputElement>document.getElementById('ancho_A2_P4')).value);

    this.alto_A3_P4 = parseInt((<HTMLInputElement>document.getElementById('alto_A3_P4')).value);

    this.ancho_A3_P4 = parseInt((<HTMLInputElement>document.getElementById('ancho_A3_P4')).value);

    this.alto_A4_P4 = parseInt((<HTMLInputElement>document.getElementById('alto_A4_P4')).value);

    this.ancho_A4_P4 = parseInt((<HTMLInputElement>document.getElementById('ancho_A4_P4')).value);

    // ==========================================================
    // AREA DE ABERTURAS PARED 5
    // ==========================================================

    this.alto_A1_P5 = parseInt((<HTMLInputElement>document.getElementById('alto_A1_P5')).value);

    this.ancho_A1_P5 = parseInt((<HTMLInputElement>document.getElementById('ancho_A1_P5')).value);

    this.alto_A2_P5 = parseInt((<HTMLInputElement>document.getElementById('alto_A2_P5')).value);

    this.ancho_A2_P5 = parseInt((<HTMLInputElement>document.getElementById('ancho_A2_P5')).value);

    this.alto_A3_P5 = parseInt((<HTMLInputElement>document.getElementById('alto_A3_P5')).value);

    this.ancho_A3_P5 = parseInt((<HTMLInputElement>document.getElementById('ancho_A3_P5')).value);

    this.alto_A4_P5 = parseInt((<HTMLInputElement>document.getElementById('alto_A4_P5')).value);

    this.ancho_A4_P5 = parseInt((<HTMLInputElement>document.getElementById('ancho_A4_P5')).value);

    // ==========================================================
    // CALCULO DE AREAS
    // ==========================================================

    // ==========================================================
    // AREA PARED 1
    // ==========================================================

    let AreaMuroP1 = (this.largo_P1) * (this.ancho_P1);
    let AreaA1P1 = (this.ancho_A1_P1) * (this.alto_A1_P1);
    let AreaA2P1 = (this.ancho_A2_P1) * (this.alto_A2_P1);
    let AreaA3P1 = (this.ancho_A3_P1) * (this.alto_A3_P1);
    let AreaA4P1 = (this.ancho_A4_P1) * (this.alto_A4_P1);

    let seleccion1 = (<HTMLInputElement>document.getElementById('SeleccionMuro1')).value;
    let numeroSeleccion1 = (<HTMLInputElement>document.getElementById('SeleccionEspesor1')).value;
    let AreaTotalP1 = (AreaMuroP1 - AreaA1P1 - AreaA2P1 - AreaA3P1 - AreaA4P1);

    if (seleccion1 === 'P' && (parseInt(numeroSeleccion1)) == 7) {
      this.Portante_AreaTotalE7 += AreaTotalP1;
    }
    if (seleccion1 == 'NP' && parseInt(numeroSeleccion1) == 7) {
      this.NoPortante_AreaTotalE7 += AreaTotalP1;
    }
    if (seleccion1 === 'P' && parseInt(numeroSeleccion1) == 10) {
      this.Portante_AreaTotalE10 += AreaTotalP1;
    }
    if (seleccion1 === 'NP' && parseInt(numeroSeleccion1) == 10) {
      this.NoPortante_AreaTotalE10 += AreaTotalP1;
    }
    if (seleccion1 === 'P' && parseInt(numeroSeleccion1) == 15) {
      this.Portante_AreaTotalE15 += AreaTotalP1;
    }
    if (seleccion1 === 'NP' && parseInt(numeroSeleccion1) == 15) {
      this.NoPortante_AreaTotalE15 += AreaTotalP1;
    }
    if (seleccion1 === 'P' && parseInt(numeroSeleccion1) == 20) {
      this.Portante_AreaTotalE20 += AreaTotalP1;
    }
    if (seleccion1 === 'NP' && parseInt(numeroSeleccion1) == 20) {
      this.NoPortante_AreaTotalE20 += AreaTotalP1;
    }


    if (AreaTotalP1 >= 0) {
      this.areatotalp1 = AreaTotalP1;

    } else {
      this.areatotalp1 = 0;
      alert('LOS VALORES INGRESADOS EN LA PARED 1 NO SON VALIDOS');
    }


    // ==========================================================
    // AREA PARED 2
    // ==========================================================

    let AreaMuroP2 = (this.largo_P2) * (this.ancho_P2);
    let AreaA1P2 = (this.ancho_A1_P2) * (this.alto_A1_P2);
    let AreaA2P2 = (this.ancho_A2_P2) * (this.alto_A2_P2);
    let AreaA3P2 = (this.ancho_A3_P2) * (this.alto_A3_P2);
    let AreaA4P2 = (this.ancho_A4_P2) * (this.alto_A4_P2);

    let seleccion2 = (<HTMLInputElement>document.getElementById('SeleccionMuro2')).value;
    let numeroSeleccion2 = (<HTMLInputElement>document.getElementById('SeleccionEspesor2')).value;
    let AreaTotalP2 = (AreaMuroP2 - AreaA1P2 - AreaA2P2 - AreaA3P2 - AreaA4P2);

    if (seleccion2 === 'P' && (parseInt(numeroSeleccion2)) == 7) {
      this.Portante_AreaTotalE7 += AreaTotalP2;
    }
    if (seleccion2 == 'NP' && parseInt(numeroSeleccion2) == 7) {
      this.NoPortante_AreaTotalE7 += AreaTotalP2;
    }
    if (seleccion2 === 'P' && parseInt(numeroSeleccion2) == 10) {
      this.Portante_AreaTotalE10 += AreaTotalP2;
    }
    if (seleccion2 === 'NP' && parseInt(numeroSeleccion2) == 10) {
      this.NoPortante_AreaTotalE10 += AreaTotalP2;
    }
    if (seleccion2 === 'P' && parseInt(numeroSeleccion2) == 15) {
      this.Portante_AreaTotalE15 += AreaTotalP2;
    }
    if (seleccion2 === 'NP' && parseInt(numeroSeleccion2) == 15) {
      this.NoPortante_AreaTotalE15 += AreaTotalP2;
    }
    if (seleccion2 === 'P' && parseInt(numeroSeleccion2) == 20) {
      this.Portante_AreaTotalE20 += AreaTotalP2;
    }
    if (seleccion2 === 'NP' && parseInt(numeroSeleccion2) == 20) {
      this.NoPortante_AreaTotalE20 += AreaTotalP2;
    }


    if (AreaTotalP2 >= 0) {
      this.areatotalp2 = AreaTotalP2;

    } else {
      this.areatotalp2 = 0;
      alert('LOS VALORES INGRESADOS EN LA PARED 2 NO SON VALIDOS');
    }

    // ==========================================================
    // AREA PARED 3
    // ==========================================================

    let AreaMuroP3 = (this.largo_P3) * (this.ancho_P3);
    let AreaA1P3 = (this.ancho_A1_P3) * (this.alto_A1_P3);
    let AreaA2P3 = (this.ancho_A2_P3) * (this.alto_A2_P3);
    let AreaA3P3 = (this.ancho_A3_P3) * (this.alto_A3_P3);
    let AreaA4P3 = (this.ancho_A4_P3) * (this.alto_A4_P3);

    let seleccion3 = (<HTMLInputElement>document.getElementById('SeleccionMuro3')).value;
    let numeroSeleccion3 = (<HTMLInputElement>document.getElementById('SeleccionEspesor3')).value;
    let AreaTotalP3 = (AreaMuroP3 - AreaA1P3 - AreaA2P3 - AreaA3P3 - AreaA4P3);

    if (seleccion3 === 'P' && (parseInt(numeroSeleccion3)) == 7) {
      this.Portante_AreaTotalE7 += AreaTotalP3;
    }
    if (seleccion3 == 'NP' && parseInt(numeroSeleccion3) == 7) {
      this.NoPortante_AreaTotalE7 += AreaTotalP3;
    }
    if (seleccion3 === 'P' && parseInt(numeroSeleccion3) == 10) {
      this.Portante_AreaTotalE10 += AreaTotalP3;
    }
    if (seleccion3 === 'NP' && parseInt(numeroSeleccion3) == 10) {
      this.NoPortante_AreaTotalE10 += AreaTotalP3;
    }
    if (seleccion3 === 'P' && parseInt(numeroSeleccion3) == 15) {
      this.Portante_AreaTotalE15 += AreaTotalP3;
    }
    if (seleccion3 === 'NP' && parseInt(numeroSeleccion3) == 15) {
      this.NoPortante_AreaTotalE15 += AreaTotalP3;
    }
    if (seleccion3 === 'P' && parseInt(numeroSeleccion3) == 20) {
      this.Portante_AreaTotalE20 += AreaTotalP3;
    }
    if (seleccion3 === 'NP' && parseInt(numeroSeleccion3) == 20) {
      this.NoPortante_AreaTotalE20 += AreaTotalP3;
    }


    if (AreaTotalP3 >= 0) {
      this.areatotalp3 = AreaTotalP3;

    } else {
      this.areatotalp3 = 0;
      alert('LOS VALORES INGRESADOS EN LA PARED 3 NO SON VALIDOS');
    }

    // ==========================================================
    // AREA PARED 4
    // ==========================================================

    let AreaMuroP4 = (this.largo_P4) * (this.ancho_P4);
    let AreaA1P4 = (this.ancho_A1_P4) * (this.alto_A1_P4);
    let AreaA2P4 = (this.ancho_A2_P4) * (this.alto_A2_P4);
    let AreaA3P4 = (this.ancho_A3_P4) * (this.alto_A3_P4);
    let AreaA4P4 = (this.ancho_A4_P4) * (this.alto_A4_P4);

    let seleccion4 = (<HTMLInputElement>document.getElementById('SeleccionMuro4')).value;
    let numeroSeleccion4 = (<HTMLInputElement>document.getElementById('SeleccionEspesor4')).value;
    let AreaTotalP4 = (AreaMuroP4 - AreaA1P4 - AreaA2P4 - AreaA3P4 - AreaA4P4);

    if (seleccion4 === 'P' && (parseInt(numeroSeleccion4)) == 7) {
      this.Portante_AreaTotalE7 += AreaTotalP4;
    }
    if (seleccion4 == 'NP' && parseInt(numeroSeleccion4) == 7) {
      this.NoPortante_AreaTotalE7 += AreaTotalP4;
    }
    if (seleccion4 === 'P' && parseInt(numeroSeleccion4) == 10) {
      this.Portante_AreaTotalE10 += AreaTotalP4;
    }
    if (seleccion4 === 'NP' && parseInt(numeroSeleccion4) == 10) {
      this.NoPortante_AreaTotalE10 += AreaTotalP4;
    }
    if (seleccion4 === 'P' && parseInt(numeroSeleccion4) == 15) {
      this.Portante_AreaTotalE15 += AreaTotalP4;
    }
    if (seleccion4 === 'NP' && parseInt(numeroSeleccion4) == 15) {
      this.NoPortante_AreaTotalE15 += AreaTotalP4;
    }
    if (seleccion4 === 'P' && parseInt(numeroSeleccion4) == 20) {
      this.Portante_AreaTotalE20 += AreaTotalP4;
    }
    if (seleccion4 === 'NP' && parseInt(numeroSeleccion4) == 20) {
      this.NoPortante_AreaTotalE20 += AreaTotalP4;
    }


    if (AreaTotalP4 >= 0) {
      this.areatotalp4 = AreaTotalP4;

    } else {
      this.areatotalp4 = 0;
      alert('LOS VALORES INGRESADOS EN LA PARED 4 NO SON VALIDOS');
    }

    // ==========================================================
    // AREA PARED 5
    // ==========================================================

    let AreaMuroP5 = (this.largo_P5) * (this.ancho_P5);
    let AreaA1P5 = (this.ancho_A1_P5) * (this.alto_A1_P5);
    let AreaA2P5 = (this.ancho_A2_P5) * (this.alto_A2_P5);
    let AreaA3P5 = (this.ancho_A3_P5) * (this.alto_A3_P5);
    let AreaA4P5 = (this.ancho_A4_P5) * (this.alto_A4_P5);

    let seleccion5 = (<HTMLInputElement>document.getElementById('SeleccionMuro5')).value;
    let numeroSeleccion5 = (<HTMLInputElement>document.getElementById('SeleccionEspesor5')).value;
    let AreaTotalP5 = (AreaMuroP5 - AreaA1P5 - AreaA2P5 - AreaA3P5 - AreaA4P5);

    if (seleccion5 === 'P' && (parseInt(numeroSeleccion5)) == 7) {
      this.Portante_AreaTotalE7 += AreaTotalP5;
    }
    if (seleccion5 == 'NP' && parseInt(numeroSeleccion5) == 7) {
      this.NoPortante_AreaTotalE7 += AreaTotalP5;
    }
    if (seleccion5 === 'P' && parseInt(numeroSeleccion5) == 10) {
      this.Portante_AreaTotalE10 += AreaTotalP5;
    }
    if (seleccion5 === 'NP' && parseInt(numeroSeleccion5) == 10) {
      this.NoPortante_AreaTotalE10 += AreaTotalP5;
    }
    if (seleccion5 === 'P' && parseInt(numeroSeleccion5) == 15) {
      this.Portante_AreaTotalE15 += AreaTotalP5;
    }
    if (seleccion5 === 'NP' && parseInt(numeroSeleccion5) == 15) {
      this.NoPortante_AreaTotalE15 += AreaTotalP5;
    }
    if (seleccion5 === 'P' && parseInt(numeroSeleccion5) == 20) {
      this.Portante_AreaTotalE20 += AreaTotalP5;
    }
    if (seleccion5 === 'NP' && parseInt(numeroSeleccion5) == 20) {
      this.NoPortante_AreaTotalE20 += AreaTotalP5;
    }


    if (AreaTotalP5 >= 0) {
      this.areatotalp5 = AreaTotalP5;

    } else {
      this.areatotalp5 = 0;
      alert('LOS VALORES INGRESADOS EN LA PARED 5 NO SON VALIDOS');
    }

    // ==========================================================
    // PORTANTE ESPESOR 7.5
    // ==========================================================
    let Bloquep7: number = 0;
    Bloquep7 = Math.ceil(this.Portante_AreaTotalE7 / 0.15);
    let bloques7 = 0;
    let pallets7 = 0;


    if (this.Portante_AreaTotalE7 < 0) {
      this.bloquep7 = 0;
      this.palletp7 = 0;

    } else {
      if (Bloquep7 > this.Portante_AreaTotalE7) {
        pallets7 = Math.floor(Bloquep7 / 128);
        bloques7 = Bloquep7 - (pallets7 * 128);

        this.bloquep7 = bloques7;
        this.palletp7 = pallets7;
      } else {
        if (Bloquep7 < this.Portante_AreaTotalE7) {
          pallets7 = Math.ceil(Bloquep7 / 128);
          bloques7 = 128 - Bloquep7;
          this.bloquep7 = bloques7;
          this.palletp7 = pallets7;
        }
      }
    }

   // ==========================================================
   // NO PORTANTE ESPESOR 7.5
   // ==========================================================
    let BloqueNP7 = Math.ceil(this.NoPortante_AreaTotalE7 / 0.15);
    let bloquesnp7 = 0;
    let palletsnp7 = 0;
    if (this.NoPortante_AreaTotalE7 < 0) {
      this.bloquenp7 = 0;
      this.palletnp7 = 0;
    } else {
      if (BloqueNP7 > this.NoPortante_AreaTotalE7) {
        palletsnp7 = Math.floor(BloqueNP7 / 128);
        bloquesnp7 = BloqueNP7 - (palletsnp7 * 128);

        this.bloquenp7 = bloquesnp7;
        this.palletnp7 = palletsnp7;
      } else {
        if (BloqueNP7 < this.NoPortante_AreaTotalE7) {
          palletsnp7 = Math.ceil(BloqueNP7 / 128);
          bloquesnp7 = 128 - BloqueNP7;

          this.bloquenp7 = bloquesnp7;
          this.palletnp7 = palletsnp7;
        }
      }
    }
    // ==========================================================
    // PORTANTE ESPESOR 10
    // ==========================================================
    let Bloquep10 = Math.ceil(this.Portante_AreaTotalE10 / 0.15);
    let bloques10 = 0;
    let pallets10 = 0;
    if (this.Portante_AreaTotalE10 < 0) {
      this.bloquep10 = 0;
      this.palletp10 = 0;
    } else {
      if (Bloquep10 > this.Portante_AreaTotalE10) {
        pallets10 = Math.floor(Bloquep10 / 96);
        bloques10 = Bloquep10 - (pallets10 * 96);


        this.bloquep10 = bloques10;
        this.palletp10 = pallets10;
      } else {
        if (Bloquep10 < this.Portante_AreaTotalE10) {
          pallets10 = Math.ceil(Bloquep10 / 96);
          bloques10 = 96 - Bloquep10;

          this.bloquep10 = bloques10;
          this.palletp10 = pallets10;
        }
      }
    }

    // ==========================================================
    // NO PORTANTE ESPESOR 10
    // ==========================================================
    let BloqueNP10 = Math.ceil(this.NoPortante_AreaTotalE10 / 0.15);
    let bloquesnp10 = 0;
    let palletsnp10 = 0;
    if (this.NoPortante_AreaTotalE10 < 0) {
      this.bloquenp10 = 0;
      this.palletnp10 = 0;
    } else {
      if (BloqueNP10 > this.NoPortante_AreaTotalE10) {
        palletsnp10 = Math.floor(BloqueNP10 / 96);
        bloquesnp10 = BloqueNP10 - (palletsnp10 * 96);

        this.bloquenp10 = bloquesnp10;
        this.palletnp10 = palletsnp10;
      } else {
        if (BloqueNP10 < this.NoPortante_AreaTotalE10) {
          palletsnp10 = Math.ceil(BloqueNP10 / 96);
          bloquesnp10 = 96 - BloqueNP10;

          this.bloquenp10 = bloquesnp10;
          this.palletnp10 = palletsnp10;
        }
      }
    }

   // ==========================================================
   // PORTANTE ESPESOR 15
   // ==========================================================
    let Bloquep15 = Math.ceil(this.Portante_AreaTotalE15 / 0.15);
    let bloques15 = 0;
    let pallets15 = 0;
    if (this.Portante_AreaTotalE15 < 0) {
      this.bloquenp15 = 0;
      this.palletp15 = 0;
    } else {
      if (Bloquep15 > this.Portante_AreaTotalE15) {
        pallets15 = Math.floor(Bloquep15 / 64);
        bloques15 = Bloquep15 - (pallets15 * 64);


        this.bloquep15 = bloques15;
        this.palletp15 = pallets15;
      } else {
        if (Bloquep15 < this.Portante_AreaTotalE15) {
          pallets15 = Math.ceil(Bloquep15 / 64);
          bloques15 = 64 - Bloquep15;

          this.bloquep15 = bloques15;
          this.palletp15 = pallets15;
        }
      }
    }

    // ==========================================================
    // NO PORTANTE ESPESOR 15
    // ==========================================================
    let BloqueNP15 = Math.ceil(this.NoPortante_AreaTotalE15 / 0.15);
    let bloquesnp15 = 0;
    let palletsnp15 = 0;
    if (this.NoPortante_AreaTotalE15 < 0) {
      this.bloquenp15 = 0;
      this.palletnp15 = 0;
    } else {
      if (BloqueNP15 > this.NoPortante_AreaTotalE15) {
        palletsnp15 = Math.floor(BloqueNP15 / 64);
        bloquesnp15 = BloqueNP15 - (palletsnp15 * 64);

        this.bloquenp15 = bloquesnp15;
        this.palletnp15 = palletsnp15;
      } else {
        if (BloqueNP15 < this.NoPortante_AreaTotalE15) {
          palletsnp15 = Math.ceil(BloqueNP15 / 64);
          bloquesnp15 = 64 - BloqueNP15;

          this.bloquenp15 = bloquesnp15;
          this.palletnp15 = palletsnp15;
        }
      }
    }

    // ==========================================================
    // PORTANTE ESPESOR 20
    // ==========================================================
    let Bloquep20 = Math.ceil(this.Portante_AreaTotalE20 / 0.15);
    let bloques20 = 0;
    let pallets20 = 0;
    if (this.Portante_AreaTotalE20 < 0) {
      this.bloquenp20 = 0;
      this.palletp20 = 0;
    } else {
      if (Bloquep20 > this.Portante_AreaTotalE20) {
        pallets20 = Math.floor(Bloquep20 / 48);
        bloques20 = Bloquep20 - (pallets20 * 48);


        this.bloquep20 = bloques20;
        this.palletp20 = pallets20;
      } else {
        if (Bloquep20 < this.Portante_AreaTotalE20) {
          pallets20 = Math.ceil(Bloquep20 / 48);
          bloques20 = 48 - Bloquep20;

          this.bloquep20 = bloques20;
          this.palletp20 = pallets20;
        }
      }
    }

    // ==========================================================
    // NO PORTANTE ESPESOR 20
    // ==========================================================
    let BloqueNP20 = Math.ceil(this.NoPortante_AreaTotalE20 / 0.15);
    let bloquesnp20 = 0;
    let palletsnp20 = 0;
    if (this.NoPortante_AreaTotalE20 < 0) {
      this.bloquenp20 = 0;
      this.palletnp20 = 0;
    } else {
      if (BloqueNP20 > this.NoPortante_AreaTotalE20) {
        palletsnp20 = Math.floor(BloqueNP20 / 48);
        bloquesnp20 = BloqueNP20 - (palletsnp20 * 48);

        this.bloquenp20 = bloquesnp20;
        this.palletnp20 = palletsnp20;
      } else {
        if (BloqueNP20 < this.NoPortante_AreaTotalE20) {
          palletsnp20 = Math.ceil(BloqueNP20 / 48);
          bloquesnp20 = 48 - BloqueNP20;

          this.bloquenp20 = bloquesnp20;
          this.palletnp20 = palletsnp20;
        }
      }
    }

  }

}

