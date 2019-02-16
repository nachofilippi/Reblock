// function handleClick(event)
// {
//   alert('click');
// }
//
// document.getElementById('click-me').onclick = handleClick;

document.getElementById('click-me').onclick = calcularAreas;

export function calcularAreas(){

        // areas de paredes
        var largo_P1 = document.getElementById("largo_P1");
        var ancho_P1 = document.getElementById("ancho_P1");
        var largo_P2 = document.getElementById("largo_P2");
        var ancho_P2 = document.getElementById("ancho_P2");
        var largo_P3 = document.getElementById("largo_P3");
        var ancho_P3 = document.getElementById("ancho_P3");
        var largo_P4 = document.getElementById("largo_P4");
        var ancho_P5 = document.getElementById("ancho_P5");

        // areas de aberturas pared 1
        var ancho_A1_P1 = document.getElementById("ancho_A1_P1");
        var alto_A1_P1 = document.getElementById("alto_A1_P1");
        var ancho_A2_P1 = document.getElementById("ancho_A2_P1");
        var alto_A2_P1 = document.getElementById("alto_A2_P1");
        var ancho_A3_P1 = document.getElementById("ancho_A3_P1");
        var alto_A3_P1 = document.getElementById("alto_A3_P1");
        var ancho_A4_P1 = document.getElementById("ancho_A4_P1");
        var alto_A4_P1 = document.getElementById("alto_A4_P1");
        var ancho_A5_P1 = document.getElementById("ancho_A5_P1");
        var alto_A5_P1 = document.getElementById("alto_A5_P1");

        // areas de aberturas pared 2
        var ancho_A1_P2 = document.getElementById("ancho_A1_P2");
        var alto_A1_P2 = document.getElementById("alto_A1_P2");
        var ancho_A2_P2 = document.getElementById("ancho_A2_P2");
        var alto_A2_P2 = document.getElementById("alto_A2_P2");
        var ancho_A3_P2 = document.getElementById("ancho_A3_P2");
        var alto_A3_P2 = document.getElementById("alto_A3_P2");
        var ancho_A4_P2 = document.getElementById("ancho_A4_P2");
        var alto_A4_P2 = document.getElementById("alto_A4_P2");
        var ancho_A5_P2 = document.getElementById("ancho_A5_P2");
        var alto_A5_P2 = document.getElementById("alto_A5_P2");

        // areas de aberturas pared 3
        var ancho_A1_P3 = document.getElementById("ancho_A1_P3");
        var alto_A1_P3 = document.getElementById("alto_A1_P3");
        var ancho_A2_P3 = document.getElementById("ancho_A2_P3");
        var alto_A2_P3 = document.getElementById("alto_A2_P3");
        var ancho_A3_P3 = document.getElementById("ancho_A3_P3");
        var alto_A3_P3 = document.getElementById("alto_A3_P3");
        var ancho_A4_P3 = document.getElementById("ancho_A4_P3");
        var alto_A4_P3 = document.getElementById("alto_A4_P3");
        var ancho_A5_P3 = document.getElementById("ancho_A5_P3");
        var alto_A5_P3 = document.getElementById("alto_A5_P3");

        // areas de aberturas pared 4
        var ancho_A1_P4 = document.getElementById("ancho_A1_P4");
        var alto_A1_P4 = document.getElementById("alto_A1_P4");
        var ancho_A2_P4 = document.getElementById("ancho_A2_P4");
        var alto_A2_P4 = document.getElementById("alto_A2_P4");
        var ancho_A3_P4 = document.getElementById("ancho_A3_P4");
        var alto_A3_P4 = document.getElementById("alto_A3_P4");
        var ancho_A4_P4 = document.getElementById("ancho_A4_P4");
        var alto_A4_P4 = document.getElementById("alto_A4_P4");
        var ancho_A5_P4 = document.getElementById("ancho_A5_P4");
        var alto_A5_P4 = document.getElementById("alto_A5_P4");

        // areas de aberturas pared 5
        var ancho_A1_P5 = document.getElementById("ancho_A1_P5");
        var alto_A1_P5 = document.getElementById("alto_A1_P5");
        var ancho_A2_P5 = document.getElementById("ancho_A2_P5");
        var alto_A2_P5 = document.getElementById("alto_A2_P5");
        var ancho_A3_P5 = document.getElementById("ancho_A3_P5");
        var alto_A3_P5 = document.getElementById("alto_A3_P5");
        var ancho_A4_P5 = document.getElementById("ancho_A4_P5");
        var alto_A4_P5 = document.getElementById("alto_A4_P5");
        var ancho_A5_P5 = document.getElementById("ancho_A5_P5");
        var alto_A5_P5 = document.getElementById("alto_A5_P5");



        // CALCULO DE AREAS
        // area pared 1
        var AreaMuroP1 = (largo_P1.value) * (ancho_P1.value);
        var AreaA1P1 = (ancho_A1_P1.value) * (alto_A1_P1.value);
        var AreaA2P1 = (ancho_A2_P1.value) * (alto_A2_P1.value);
        var AreaA3P1 = (ancho_A3_P1.value) * (alto_A3_P1.value);
        var AreaA4P1 = (ancho_A4_P1.value) * (alto_A4_P1.value);
        var AreaA5P1 = (ancho_A5_P1.value) * (alto_A5_P1.value);

        var AreaTotalP1 = AreaMuroP1 - AreaA1P1 - AreaA2P1 - AreaA3P1 - AreaA4P1 - AreaA5P1;
        document.getElementById("areatotalp1").value = AreaTotalP1;

        // area pared 2
        var AreaMuroP2 = (largo_P2.value) * (ancho_P2.value);
        var AreaA1P2 = (ancho_A1_P2.value) * (alto_A1_P2.value);
        var AreaA2P2 = (ancho_A2_P2.value) * (alto_A2_P2.value);
        var AreaA3P2 = (ancho_A3_P2.value) * (alto_A3_P2.value);
        var AreaA4P2 = (ancho_A4_P2.value) * (alto_A4_P2.value);
        var AreaA5P2 = (ancho_A5_P2.value) * (alto_A5_P2.value);

        var AreaTotalP2 = AreaMuroP2 - AreaA1P2 - AreaA2P2 - AreaA3P2 - AreaA4P2 - AreaA5P2;
        document.getElementById("areatotalp2").value = AreaTotalP2;

        // area pared 3
        var AreaMuroP3 = (largo_P3.value) * (ancho_P3.value);
        var AreaA1P3 = (ancho_A1_P3.value) * (alto_A1_P3.value);
        var AreaA2P3 = (ancho_A2_P3.value) * (alto_A2_P3.value);
        var AreaA3P3 = (ancho_A3_P3.value) * (alto_A3_P3.value);
        var AreaA4P3 = (ancho_A4_P3.value) * (alto_A4_P3.value);
        var AreaA5P3 = (ancho_A5_P3.value) * (alto_A5_P3.value);

        var AreaTotalP3 = (largo_P3.value) * (ancho_P3.value) -(ancho_A1_P3.value*alto_A1_P3.value)-(ancho_A2_P3.value*ancho_A2_P3.value)-(ancho_A3_P3.value*alto_A3_P3.value)-(ancho_A4_P3.value*alto_A4_P3.value)-(ancho_A5_P3.value*alto_A5_P3.value);
        document.getElementById("areatotalp3").value = AreaTotalP3;

        // area pared 4
        var AreaMuroP4 = (largo_P4.value) * (ancho_P4.value);
        var AreaA1P4 = (ancho_A1_P4.value) * (alto_A1_P4.value);
        var AreaA2P4 = (ancho_A2_P4.value) * (alto_A2_P4.value);
        var AreaA3P4 = (ancho_A3_P4.value) * (alto_A3_P4.value);
        var AreaA4P4 = (ancho_A4_P4.value) * (alto_A4_P4.value);
        var AreaA5P4 = (ancho_A5_P4.value) * (alto_A5_P4.value);

        var AreaTotalP4 = (largo_P4.value) * (ancho_P4.value) -(ancho_A1_P4.value*alto_A1_P4.value)-(ancho_A2_P4.value*ancho_A2_P4.value)-(ancho_A3_P4.value*alto_A3_P4.value)-(ancho_A4_P4.value*alto_A4_P4.value)-(ancho_A5_P4.value*alto_A5_P4.value);
        document.getElementById("areatotalp4").value = AreaTotalP4;

        // area pared 5
        var AreaMuroP5 = (largo_P5.value) * (ancho_P5.value);
        var AreaA1P5 = (ancho_A1_P5.value) * (alto_A1_P5.value);
        var AreaA2P5 = (ancho_A2_P5.value) * (alto_A2_P5.value);
        var AreaA3P5 = (ancho_A3_P5.value) * (alto_A3_P5.value);
        var AreaA4P5 = (ancho_A4_P5.value) * (alto_A4_P5.value);
        var AreaA5P5 = (ancho_A5_P5.value) * (alto_A5_P5.value);

        var AreaTotalP5 = (largo_P5.value) * (ancho_P5.value) -(ancho_A1_P5.value*alto_A1_P5.value)-(ancho_A2_P5.value*ancho_A2_P5.value)-(ancho_A3_P5.value*alto_A3_P5.value)-(ancho_A4_P5.value*alto_A4_P5.value)-(ancho_A5_P5.value*alto_A5_P5.value);
        document.getElementById("areatotalp5").value = AreaTotalP5;


        // alerta de areas resultadas
        // alert(AreaTotalP1,AreaTotalP3)
          // , "area de pared 2:" AreaP2,"area de pared 3:" AreaP3, "area de pared 4:" AreaP4, "area de pared 5:" AreaP5);
         // var AreaP1 = $("#num").val();
         // var AreaP1 = $("#num").val();
         // var AreaP2 = $("#num").val();
         // var AreaP3 = $("#num").val();
         // var AreaP4 = $("#num").val();
         // var AreaP5 = $("#num").val();

}
