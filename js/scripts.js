$(document).ready(function () {
    var clicks = 0;
    var final = false; //Define si el juego acaba

    $(".casilla").click(function (e) {
        e.preventDefault();

        //Si no hay ganador
        if (final == false) {
            var valor = $(this).html();
            if (valor == "") {

                clicks++;
                if (clicks % 2 != 0) //Si es impar
                {
                    //Añadir X
                    $(this).html("X");
                }
                else {
                    $(this).html("O");
                }
            }
            buscarGanador();
        }


    });

    function buscarGanador() {
        //Llenar array de posiciones
        var array = [];
        $(".tabla td").each(function () {
            var val = $(this).html();
            array.push(val);
        });
        console.log(array);


        if (clicks >= 5) { //Minimo 5 clicks

            //Buscar Horizontal
            if (array[0] == array[1] && array[0] == array[2] && array[0]!="") {
                if (array[0] == "X")
                    alert("Gana el jugador 1 X");
                else if (array[0] == "O")
                    alert("Gana el jugador 2 O");

                final = true;
            }
            else if (array[3] == array[4] && array[3] == array[5] && array[3]!="") {
                if (array[3] == "X")
                    alert("Gana el jugador 1 X");
                else if (array[3] == "O")
                    alert("Gana el jugador 2 O");

                final = true;
            }
            else if (array[6] == array[7] && array[6] == array[8] && array[6]!="") {
                if (array[6] == "X")
                    alert("Gana el jugador 1 X");
                else if (array[6] == "O")
                    alert("Gana el jugador 2 O");

                final = true;
            }

            //Buscar Vertical
            if (array[0] == array[3] && array[0] == array[6] && array[0]!="") {
                if (array[0] == "X")
                    alert("Gana el jugador 1 X");
                else if (array[0] == "O")
                    alert("Gana el jugador 2 O");

                final = true;
            }
            else if (array[1] == array[4] && array[1] == array[7] && array[1]!="") {
                if (array[1] == "X")
                    alert("Gana el jugador 1 X");
                else if (array[1] == "O")
                    alert("Gana el jugador 2 O");

                final = true;
            }
            else if (array[2] == array[5] && array[2] == array[8] && array[2]!="") {
                if (array[2] == "X")
                    alert("Gana el jugador 1 X");
                else if (array[2] == "O")
                    alert("Gana el jugador 2 O");

                final = true;
            }

            //Buscar Diagonal
            if (array[0] == array[4] && array[0] == array[8] && array[0]!="") {
                if (array[0] == "X")
                    alert("Gana el jugador 1 X");
                else if (array[0] == "O")
                    alert("Gana el jugador 2 O");

                final = true;
            }
            else if (array[2] == array[4] && array[2] == array[6] && array[2]!="") {
                if (array[2] == "X")
                    alert("Gana el jugador 1 X");
                else if (array[2] == "O")
                    alert("Gana el jugador 2 O");

                final = true;
            }
        }
    }

    //Reiniciar juego
    $("#botonReinicio").click(function (e) { 
        e.preventDefault();
        clicks=0;
        final=false;
        $(".tabla td").each(function () {
            $(this).html("");
        }); 
    });

});
