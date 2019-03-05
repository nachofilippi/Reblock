// function handleClick(event)
// {
//   alert('click')
// }
//
// document.getElementById('click-me').onclick = handleClick

document.getElementById('click-me').onclick = calcularAreas

function calcularAreas() {

  // cleaner fields
  document.getElementById('bloquep7').value = '';
  document.getElementById('palletsp7').value = '';
  document.getElementById('bloquep10').value = '';
  document.getElementById('palletsp10').value = '';
  document.getElementById('bloquep15').value = '';
  document.getElementById('palletsp15').value = '';
  document.getElementById('bloquep20').value = '';
  document.getElementById('palletsp20').value = '';
  document.getElementById('bloquenp7').value = '';
  document.getElementById('palletsnp7').value = '';
  document.getElementById('bloquenp10').value = '';
  document.getElementById('palletsnp10').value = '';
  document.getElementById('bloquenp15').value = '';
  document.getElementById('palletsnp15').value = '';
  document.getElementById('bloquenp20').value = '';
  document.getElementById('palletsnp20').value = '';



  // areas de paredes ----------------------------------------------------------------------------
  var largo_P1 = document.getElementById('largo_P1')
  var ancho_P1 = document.getElementById('ancho_P1')
  var largo_P2 = document.getElementById('largo_P2')
  var ancho_P2 = document.getElementById('ancho_P2')
  var largo_P3 = document.getElementById('largo_P3')
  var ancho_P3 = document.getElementById('ancho_P3')
  var largo_P4 = document.getElementById('largo_P4')
  var ancho_P5 = document.getElementById('ancho_P5')

  // areas de aberturas pared 1 -------------------------------------------------------------------

  var ancho_A1_P1 = document.getElementById('ancho_A1_P1')
  var alto_A1_P1 = document.getElementById('alto_A1_P1')
  var ancho_A2_P1 = document.getElementById('ancho_A2_P1')
  var alto_A2_P1 = document.getElementById('alto_A2_P1')
  var ancho_A3_P1 = document.getElementById('ancho_A3_P1')
  var alto_A3_P1 = document.getElementById('alto_A3_P1')
  var ancho_A4_P1 = document.getElementById('ancho_A4_P1')
  var alto_A4_P1 = document.getElementById('alto_A4_P1')

  // areas de aberturas pared 2
  var ancho_A1_P2 = document.getElementById('ancho_A1_P2')
  var alto_A1_P2 = document.getElementById('alto_A1_P2')
  var ancho_A2_P2 = document.getElementById('ancho_A2_P2')
  var alto_A2_P2 = document.getElementById('alto_A2_P2')
  var ancho_A3_P2 = document.getElementById('ancho_A3_P2')
  var alto_A3_P2 = document.getElementById('alto_A3_P2')
  var ancho_A4_P2 = document.getElementById('ancho_A4_P2')
  var alto_A4_P2 = document.getElementById('alto_A4_P2')

  // areas de aberturas pared 3
  var ancho_A1_P3 = document.getElementById('ancho_A1_P3')
  var alto_A1_P3 = document.getElementById('alto_A1_P3')
  var ancho_A2_P3 = document.getElementById('ancho_A2_P3')
  var alto_A2_P3 = document.getElementById('alto_A2_P3')
  var ancho_A3_P3 = document.getElementById('ancho_A3_P3')
  var alto_A3_P3 = document.getElementById('alto_A3_P3')
  var ancho_A4_P3 = document.getElementById('ancho_A4_P3')
  var alto_A4_P3 = document.getElementById('alto_A4_P3')

  // areas de aberturas pared 4
  var ancho_A1_P4 = document.getElementById('ancho_A1_P4')
  var alto_A1_P4 = document.getElementById('alto_A1_P4')
  var ancho_A2_P4 = document.getElementById('ancho_A2_P4')
  var alto_A2_P4 = document.getElementById('alto_A2_P4')
  var ancho_A3_P4 = document.getElementById('ancho_A3_P4')
  var alto_A3_P4 = document.getElementById('alto_A3_P4')
  var ancho_A4_P4 = document.getElementById('ancho_A4_P4')
  var alto_A4_P4 = document.getElementById('alto_A4_P4')

  // areas de aberturas pared 5
  var ancho_A1_P5 = document.getElementById('ancho_A1_P5')
  var alto_A1_P5 = document.getElementById('alto_A1_P5')
  var ancho_A2_P5 = document.getElementById('ancho_A2_P5')
  var alto_A2_P5 = document.getElementById('alto_A2_P5')
  var ancho_A3_P5 = document.getElementById('ancho_A3_P5')
  var alto_A3_P5 = document.getElementById('alto_A3_P5')
  var ancho_A4_P5 = document.getElementById('ancho_A4_P5')
  var alto_A4_P5 = document.getElementById('alto_A4_P5')

  // areas de acuerdo al espesor y tipo
  var Portante_AreaTotalE7 = 0
  var Portante_AreaTotalE10 = 0
  var Portante_AreaTotalE15 = 0
  var Portante_AreaTotalE20 = 0

  var NoPortante_AreaTotalE7 = 0
  var NoPortante_AreaTotalE10 = 0
  var NoPortante_AreaTotalE15 = 0
  var NoPortante_AreaTotalE20 = 0

  // CALCULO DE AREAS
  // area pared 1

  var AreaMuroP1 = (largo_P1.value) * (ancho_P1.value)
  var AreaA1P1 = (ancho_A1_P1.value) * (alto_A1_P1.value)
  var AreaA2P1 = (ancho_A2_P1.value) * (alto_A2_P1.value)
  var AreaA3P1 = (ancho_A3_P1.value) * (alto_A3_P1.value)
  var AreaA4P1 = (ancho_A4_P1.value) * (alto_A4_P1.value)

  var seleccion1 = $('#SeleccionMuro1 option:selected').text()
  var numeroSeleccion1 = $('#SeleccionEspesor1').val()
  var AreaTotalP1 = AreaMuroP1 - AreaA1P1 - AreaA2P1 - AreaA3P1 - AreaA4P1
  if (seleccion1 == 'Portante' && numeroSeleccion1 == 7.5) {
    Portante_AreaTotalE7 += AreaTotalP1
  }
  if (seleccion1 == 'No Portante' && numeroSeleccion1 == 7.5) {
    NoPortante_AreaTotalE7 += AreaTotalP1
  }
  if (seleccion1 == 'Portante' && numeroSeleccion1 == 10) {
    Portante_AreaTotalE10 += AreaTotalP1
  }
  if (seleccion1 == 'No Portante' && numeroSeleccion1 == 10) {
    NoPortante_AreaTotalE10 += AreaTotalP1
  }
  if (seleccion1 == 'Portante' && numeroSeleccion1 == 15) {
    Portante_AreaTotalE15 += AreaTotalP1
  }
  if (seleccion1 == 'No Portante' && numeroSeleccion1 == 15) {
    NoPortante_AreaTotalE15 += AreaTotalP1
  }
  if (seleccion1 == 'Portante' && numeroSeleccion1 == 20) {
    Portante_AreaTotalE20 += AreaTotalP1
  }
  if (seleccion1 == 'No Portante' && numeroSeleccion1 == 20) {
    NoPortante_AreaTotalE20 += AreaTotalP1
  }
  if (AreaTotalP1 >= 0) {
    document.getElementById("areatotalp1").style.color = "black";
    document.getElementById('areatotalp1').value = AreaTotalP1;
    
  } else {
    document.getElementById('areatotalp1').value = '0'
    document.getElementById("areatotalp1").style.color = "red";
    alert("LOS VALORES INGRESADOS EN LA PARED 1 NO SON VALIDOS");
  }

  // area pared 2
  var AreaMuroP2 = (largo_P2.value) * (ancho_P2.value)
  var AreaA1P2 = (ancho_A1_P2.value) * (alto_A1_P2.value)
  var AreaA2P2 = (ancho_A2_P2.value) * (alto_A2_P2.value)
  var AreaA3P2 = (ancho_A3_P2.value) * (alto_A3_P2.value)
  var AreaA4P2 = (ancho_A4_P2.value) * (alto_A4_P2.value)

  var AreaTotalP2 = AreaMuroP2 - AreaA1P2 - AreaA2P2 - AreaA3P2 - AreaA4P2
  var seleccion2 = $('#SeleccionMuro2 option:selected').text()
  var numeroSeleccion2 = $('#SeleccionEspesor2').val()
  if (seleccion2 == 'Portante' && numeroSeleccion2 == 7.5) {
    Portante_AreaTotalE7 += AreaTotalP2
  }
  if (seleccion2 == 'No Portante' && numeroSeleccion2 == 7.5) {
    NoPortante_AreaTotalE7 += AreaTotalP2
  }
  if (seleccion2 == 'Portante' && numeroSeleccion2 == 10) {
    Portante_AreaTotalE10 += AreaTotalP2
  }
  if (seleccion2 == 'No Portante' && numeroSeleccion2 == 10) {
    NoPortante_AreaTotalE10 += AreaTotalP2
  }
  if (seleccion2 == 'Portante' && numeroSeleccion2 == 15) {
    Portante_AreaTotalE15 += AreaTotalP2
  }
  if (seleccion2 == 'No Portante' && numeroSeleccion2 == 15) {
    NoPortante_AreaTotalE15 += AreaTotalP2
  }
  if (seleccion2 == 'Portante' && numeroSeleccion2 == 20) {
    Portante_AreaTotalE20 += AreaTotalP2
  }
  if (seleccion2 == 'No Portante' && numeroSeleccion2 == 20) {
    NoPortante_AreaTotalE20 += AreaTotalP2
  }
  if (AreaTotalP2 >= 0) {
    document.getElementById("areatotalp2").style.color = "black";
    document.getElementById('areatotalp2').value = AreaTotalP2;
    
  } else {
    document.getElementById('areatotalp2').value = '0';
    document.getElementById("areatotalp2").style.color = "red";
    alert("LOS VALORES INGRESADOS EN LA PARED 2 NO SON VALIDOS");
  }

  // area pared 3
  var AreaMuroP3 = (largo_P3.value) * (ancho_P3.value)
  var AreaA1P3 = (ancho_A1_P3.value) * (alto_A1_P3.value)
  var AreaA2P3 = (ancho_A2_P3.value) * (alto_A2_P3.value)
  var AreaA3P3 = (ancho_A3_P3.value) * (alto_A3_P3.value)
  var AreaA4P3 = (ancho_A4_P3.value) * (alto_A4_P3.value)

  var AreaTotalP3 = AreaMuroP3 - AreaA1P3 - (AreaA2P3) - AreaA3P3 - AreaA4P3
  var seleccion3 = $('#SeleccionMuro3 option:selected').text()
  var numeroSeleccion3 = $('#SeleccionEspesor3').val()
  if (seleccion3 == 'Portante' && numeroSeleccion3 == 7.5) {
    Portante_AreaTotalE7 += AreaTotalP3
  }
  if (seleccion3 == 'No Portante' && numeroSeleccion3 == 7.5) {
    NoPortante_AreaTotalE7 += AreaTotalP3
  }
  if (seleccion3 == 'Portante' && numeroSeleccion3 == 10) {
    Portante_AreaTotalE10 += AreaTotalP3
  }
  if (seleccion3 == 'No Portante' && numeroSeleccion3 == 10) {
    NoPortante_AreaTotalE10 += AreaTotalP3
  }
  if (seleccion3 == 'Portante' && numeroSeleccion3 == 15) {
    Portante_AreaTotalE15 += AreaTotalP3
  }
  if (seleccion3 == 'No Portante' && numeroSeleccion3 == 15) {
    NoPortante_AreaTotalE15 += AreaTotalP3
  }
  if (seleccion3 == 'Portante' && numeroSeleccion3 == 20) {
    Portante_AreaTotalE20 += AreaTotalP3
  }
  if (seleccion3 == 'No Portante' && numeroSeleccion3 == 20) {
    NoPortante_AreaTotalE20 += AreaTotalP3
  }
  if (AreaTotalP3 >= 0) {
    document.getElementById("areatotalp3").style.color = "black";
    document.getElementById('areatotalp3').value = AreaTotalP3;
    
  } else {
    document.getElementById('areatotalp3').value = '0';
    document.getElementById("areatotalp3").style.color = "red";
    alert("LOS VALORES INGRESADOS EN LA PARED 3 NO SON VALIDOS");
  }
  // area pared 4
  var AreaMuroP4 = (largo_P4.value) * (ancho_P4.value)
  var AreaA1P4 = (ancho_A1_P4.value) * (alto_A1_P4.value)
  var AreaA2P4 = (ancho_A2_P4.value) * (alto_A2_P4.value)
  var AreaA3P4 = (ancho_A3_P4.value) * (alto_A3_P4.value)
  var AreaA4P4 = (ancho_A4_P4.value) * (alto_A4_P4.value)

  var AreaTotalP4 = AreaMuroP4 - AreaA1P4 - AreaA2P4 - AreaA3P4 - AreaA4P4
  var seleccion4 = $('#SeleccionMuro4 option:selected').text()
  var numeroSeleccion4 = $('#SeleccionEspesor4').val()
  if (seleccion4 == 'Portante' && numeroSeleccion4 == 7.5) {
    Portante_AreaTotalE7 += AreaTotalP4
  }
  if (seleccion4 == 'No Portante' && numeroSeleccion4 == 7.5) {
    NoPortante_AreaTotalE7 += AreaTotalP4
  }
  if (seleccion4 == 'Portante' && numeroSeleccion4 == 10) {
    Portante_AreaTotalE10 += AreaTotalP4
  }
  if (seleccion4 == 'No Portante' && numeroSeleccion4 == 10) {
    NoPortante_AreaTotalE10 += AreaTotalP4
  }
  if (seleccion4 == 'Portante' && numeroSeleccion4 == 15) {
    Portante_AreaTotalE15 += AreaTotalP4
  }
  if (seleccion4 == 'No Portante' && numeroSeleccion4 == 15) {
    NoPortante_AreaTotalE15 += AreaTotalP4
  }
  if (seleccion4 == 'Portante' && numeroSeleccion4 == 20) {
    Portante_AreaTotalE20 += AreaTotalP4
  }
  if (seleccion4 == 'No Portante' && numeroSeleccion4 == 20) {
    NoPortante_AreaTotalE20 += AreaTotalP4
  }
  if (AreaTotalP4 >= 0) {
    document.getElementById("areatotalp4").style.color = "black";
    document.getElementById('areatotalp4').value = AreaTotalP4;

  } else {
    document.getElementById('areatotalp4').value = '0';
    document.getElementById("areatotalp4").style.color = "red";
    alert("LOS VALORES INGRESADOS EN LA PARED 4 NO SON VALIDOS");
  }
  // area pared 5
  var AreaMuroP5 = (largo_P5.value) * (ancho_P5.value)
  var AreaA1P5 = (ancho_A1_P5.value) * (alto_A1_P5.value)
  var AreaA2P5 = (ancho_A2_P5.value) * (alto_A2_P5.value)
  var AreaA3P5 = (ancho_A3_P5.value) * (alto_A3_P5.value)
  var AreaA4P5 = (ancho_A4_P5.value) * (alto_A4_P5.value)

  var AreaTotalP5 = AreaMuroP5 - AreaA1P5 - AreaA2P5 - AreaA3P5 - AreaA4P5
  var seleccion5 = $('#SeleccionMuro5 option:selected').text()
  var numeroSeleccion5 = $('#SeleccionEspesor5').val()
  if (seleccion5 == 'Portante' && numeroSeleccion5 == 7.5) {
    Portante_AreaTotalE7 += AreaTotalP5
  }
  if (seleccion5 == 'No Portante' && numeroSeleccion5 == 7.5) {
    NoPortante_AreaTotalE7 += AreaTotalP5
  }
  if (seleccion5 == 'Portante' && numeroSeleccion5 == 10) {
    Portante_AreaTotalE10 += AreaTotalP5
  }
  if (seleccion5 == 'No Portante' && numeroSeleccion5 == 10) {
    NoPortante_AreaTotalE10 += AreaTotalP5
  }
  if (seleccion5 == 'Portante' && numeroSeleccion5 == 15) {
    Portante_AreaTotalE15 += AreaTotalP5
  }
  if (seleccion5 == 'No Portante' && numeroSeleccion5 == 15) {
    NoPortante_AreaTotalE15 += AreaTotalP5
  }
  if (seleccion5 == 'Portante' && numeroSeleccion5 == 20) {
    Portante_AreaTotalE20 += AreaTotalP5
  }
  if (seleccion5 == 'No Portante' && numeroSeleccion5 == 20) {
    NoPortante_AreaTotalE20 += AreaTotalP5
  }
  if (AreaTotalP5 >= 0) {
    document.getElementById("areatotalp5").style.color = "black";
    document.getElementById('areatotalp5').value = AreaTotalP5
  } else {
    document.getElementById('areatotalp5').value = '0'
    document.getElementById("areatotalp5").style.color = "red";
    alert("LOS VALORES INGRESADOS EN LA PARED 5 NO SON VALIDOS");
  }

  // sumatoria de areas -----------------------------------------------------------------------

  // var AreaTotalParaBloque = (AreaTotalP1) + (AreaTotalP2) + (AreaTotalP3) + (AreaTotalP4) + (AreaTotalP5)

  //   Portante espesor 7----------------------------------------------------------------
  var Bloquep7 = Math.ceil(Portante_AreaTotalE7 / 0.15)
  var bloques7 = 0
  var pallets7 = 0
  if (Portante_AreaTotalE7 < 0) {
    document.getElementById('bloquenp7').value = ''
    document.getElementById('palletsnp7').value = ''
  } else {
    if (Bloquep7 > Portante_AreaTotalE7) {
      pallets7 = Math.floor(Bloquep7 / 128)
      bloques7 = Bloquep7 - (pallets7 * 128)


      document.getElementById('bloquep7').value = bloques7
      document.getElementById('palletsp7').value = pallets7
    } else {
      if (Bloquep7 < Portante_AreaTotalE7) {
        pallets7 = Math.ceil(Bloquep7 / 128)
        bloques7 = 128 - Bloquep7

        document.getElementById('bloquep7').value = bloques7
        document.getElementById('palletsp7').value = pallets7
      }
    }
  }

  // No portante  espesor 7
  var BloqueNP7 = Math.ceil(NoPortante_AreaTotalE7 / 0.15)
  var bloquesnp7 = 0
  var palletsnp7 = 0
  if (NoPortante_AreaTotalE7 < 0) {
    document.getElementById('bloquenp7').value = ''
    document.getElementById('palletsnp7').value = ''
  } else {
    if (BloqueNP7 > NoPortante_AreaTotalE7) {
      palletsnp7 = Math.floor(BloqueNP7 / 128)
      bloquesnp7 = BloqueNP7 - (palletsnp7 * 128)

      document.getElementById('bloquenp7').value = bloquesnp7
      document.getElementById('palletsnp7').value = palletsnp7
    } else {
      if (BloqueNP7 < NoPortante_AreaTotalE7) {
        palletsnp7 = Math.ceil(BloqueNP7 / 128)
        bloquesnp7 = 128 - BloqueNP7

        document.getElementById('bloquenp7').value = bloquesnp7
        document.getElementById('palletsnp7').value = palletsnp7
      }
    }
  }
  //   Portante espesor 10----------------------------------------------------------------
  var Bloquep10 = Math.ceil(Portante_AreaTotalE10 / 0.15)
  var bloques10 = 0
  var pallets10 = 0
  if (Portante_AreaTotalE10 < 0) {
    document.getElementById('bloquenp10').value = ''
    document.getElementById('palletsnp10').value = ''
  } else {
    if (Bloquep10 > Portante_AreaTotalE10) {
      pallets10 = Math.floor(Bloquep10 / 96)
      bloques10 = Bloquep10 - (pallets10 * 96)


      document.getElementById('bloquep10').value = bloques10
      document.getElementById('palletsp10').value = pallets10
    } else {
      if (Bloquep10 < Portante_AreaTotalE10) {
        pallets10 = Math.ceil(Bloquep10 / 96)
        bloques10 = 96 - Bloquep10

        document.getElementById('bloquep10').value = bloques10
        document.getElementById('palletsp10').value = pallets10
      }
    }
  }

  // No portante  espesor 10
  var BloqueNP10 = Math.ceil(NoPortante_AreaTotalE10 / 0.15)
  var bloquesnp10 = 0
  var palletsnp10 = 0
  if (NoPortante_AreaTotalE10 < 0) {
    document.getElementById('bloquenp10').value = ''
    document.getElementById('palletsnp10').value = ''
  } else {
    if (BloqueNP10 > NoPortante_AreaTotalE10) {
      palletsnp10 = Math.floor(BloqueNP10 / 96)
      bloquesnp10 = BloqueNP10 - (palletsnp10 * 96)

      document.getElementById('bloquenp10').value = bloquesnp10
      document.getElementById('palletsnp10').value = palletsnp10
    } else {
      if (BloqueNP10 < NoPortante_AreaTotalE10) {
        palletsnp10 = Math.ceil(BloqueNP10 / 96)
        bloquesnp10 = 96 - BloqueNP10

        document.getElementById('bloquenp10').value = bloquesnp10
        document.getElementById('palletsnp10').value = palletsnp10
      }
    }
  }

  //   Portante espesor 15----------------------------------------------------------------
  var Bloquep15 = Math.ceil(Portante_AreaTotalE15 / 0.15)
  var bloques15 = 0
  var pallets15 = 0
  if (Portante_AreaTotalE15 < 0) {
    document.getElementById('bloquenp15').value = ''
    document.getElementById('palletsnp15').value = ''
  } else {
    if (Bloquep15 > Portante_AreaTotalE15) {
      pallets15 = Math.floor(Bloquep15 / 64)
      bloques15 = Bloquep15 - (pallets15 * 64)


      document.getElementById('bloquep15').value = bloques15
      document.getElementById('palletsp15').value = pallets15
    } else {
      if (Bloquep15 < Portante_AreaTotalE15) {
        pallets15 = Math.ceil(Bloquep15 / 64)
        bloques15 = 64 - Bloquep15

        document.getElementById('bloquep15').value = bloques15
        document.getElementById('palletsp15').value = pallets15
      }
    }
  }

  // No portante  espesor 15
  var BloqueNP15 = Math.ceil(NoPortante_AreaTotalE15 / 0.15)
  var bloquesnp15 = 0
  var palletsnp15 = 0
  if (NoPortante_AreaTotalE15 < 0) {
    document.getElementById('bloquenp15').value = ''
    document.getElementById('palletsnp15').value = ''
  } else {
    if (BloqueNP15 > NoPortante_AreaTotalE15) {
      palletsnp15 = Math.floor(BloqueNP15 / 64)
      bloquesnp15 = BloqueNP15 - (palletsnp15 * 64)

      document.getElementById('bloquenp15').value = bloquesnp15
      document.getElementById('palletsnp15').value = palletsnp15
    } else {
      if (BloqueNP15 < NoPortante_AreaTotalE15) {
        palletsnp15 = Math.ceil(BloqueNP15 / 64)
        bloquesnp15 = 64 - BloqueNP15

        document.getElementById('bloquenp15').value = bloquesnp15
        document.getElementById('palletsnp15').value = palletsnp15
      }
    }
  }

  //   Portante espesor 20----------------------------------------------------------------
  var Bloquep20 = Math.ceil(Portante_AreaTotalE20 / 0.15)
  var bloques20 = 0
  var pallets20 = 0
  if (Portante_AreaTotalE20 < 0) {
    document.getElementById('bloquenp20').value = ''
    document.getElementById('palletsnp20').value = ''
  } else {
    if (Bloquep20 > Portante_AreaTotalE20) {
      pallets20 = Math.floor(Bloquep20 / 48)
      bloques20 = Bloquep20 - (pallets20 * 48)


      document.getElementById('bloquep20').value = bloques20
      document.getElementById('palletsp20').value = pallets20
    } else {
      if (Bloquep20 < Portante_AreaTotalE20) {
        pallets20 = Math.ceil(Bloquep20 / 48)
        bloques20 = 48 - Bloquep20

        document.getElementById('bloquep20').value = bloques20
        document.getElementById('palletsp20').value = pallets20
      }
    }
  }

  // No portante  espesor 20
  var BloqueNP20 = Math.ceil(NoPortante_AreaTotalE20 / 0.15)
  var bloquesnp20 = 0
  var palletsnp20 = 0
  if (NoPortante_AreaTotalE20 < 0) {
    document.getElementById('bloquenp20').value = ''
    document.getElementById('palletsnp20').value = ''
  } else {
    if (BloqueNP20 > NoPortante_AreaTotalE20) {
      palletsnp20 = Math.floor(BloqueNP20 / 48)
      bloquesnp20 = BloqueNP20 - (palletsnp20 * 48)

      document.getElementById('bloquenp20').value = bloquesnp20
      document.getElementById('palletsnp20').value = palletsnp20
    } else {
      if (BloqueNP20 < NoPortante_AreaTotalE20) {
        palletsnp20 = Math.ceil(BloqueNP20 / 48)
        bloquesnp20 = 48 - BloqueNP20

        document.getElementById('bloquenp20').value = bloquesnp20
        document.getElementById('palletsnp20').value = palletsnp20
      }
    }
  }







  // for (i = 10; i < 25; i += 5) {
  //   var BloqueP = Math.ceil((eval('Portante_AreaTotalE' + i)) / 0.15)

  //   switch (i) {
  //     case 10:
  //       if (BloqueP > eval("Portante_AreaTotalE" + i)) {

  //         var palletp = Math.floor(BloqueP / 96)
  //         var bloquep = BloqueP - (palletp * 96)
  //         document.getElementById(("bloquep" + i)).value = bloquep
  //         document.getElementById(("palletsp" + i)).value = palletp


  //       } else {
  //         if (BloqueP < eval("Portante_AreaTotalE" + i)) {

  //           var palletp = Math.ceil(BloqueP / 96)
  //           var bloquep = 96 - BloqueP
  //           document.getElementById(("bloquep" + i)).value = bloquep
  //           document.getElementById(("palletsp" + i)).value = palletp
  //         }
  //       }
  //     case 15:
  //       if (BloqueP > eval("Portante_AreaTotalE" + i)) {

  //         var palletp = Math.floor(BloqueP / 64)
  //         var bloquep = BloqueP - (palletp * 64)
  //         document.getElementById(("bloquep" + i)).value = bloquep
  //         document.getElementById(("palletsp" + i)).value = palletp

  //       } else {
  //         if (BloqueP < eval("Portante_AreaTotalE" + i)) {

  //           var palletp = Math.ceil(BloqueP / 64)
  //           var bloquep = 64 - BloqueP
  //           document.getElementById(("bloquep" + i)).value = bloquep
  //           document.getElementById(("palletsp" + i)).value = palletp

  //         }
  //       }

  //     case 20:
  //       if (BloqueP > eval("Portante_AreaTotalE" + i)) {

  //         var palletp = Math.floor(BloqueP / 48)
  //         var bloquep = BloqueP - (palletp * 48)

  //         document.getElementById(("bloquep" + i)).value = bloquep
  //         document.getElementById(("palletsp" + i)).value = palletp

  //       } else {
  //         if (BloqueP < eval("Portante_AreaTotalE" + i)) {

  //           var palletp = Math.ceil(BloqueP / 48)
  //           var bloquep = 48 - BloqueP
  //           document.getElementById(("bloquep" + i)).value = bloquep
  //           document.getElementById(("palletsp" + i)).value = palletp

  //         }
  //       }
  //   }

  // }

}