class Batalla {
    constructor() {

    }

    juego() {

        var Charizard = new Pokemon("Charizard", "../img/pokemon-01.png", "fuego", 120, [
            new Ataques("fuego", "ascuas", 30),
            new Ataques("agua", "lanzallamas", 75)
        ]);


        var Garchomp = new Pokemon("Garchomp", "../img/pokemon-06.png", "Dragon", 150, [
            new Ataques("fuego", "Terremoto", 100),
            new Ataques("agua", "Carga Dragon", 100)
        ]);

        var Pikachu = new Pokemon("Garchomp", "../img/pokemon-06.png", "Dragon", 150, [
            new Ataques("fuego", "Terremoto", 100),
            new Ataques("agua", "Carga Dragon", 100),
            new Ataques("dragon", "Furia", 40)
        ]);


        var jugador = new Entrenador("yo", [Garchomp, Pikachu]);
        var enemigo = new Entrenador("Gary", [Charizard, Charizard]);

        

        var turno = 0;


        $('#pokemon-jugador').attr('src', jugador.pokemones[0].sprite);
        $('#pokemon-enemigo').attr('src', enemigo.pokemones[0].sprite);


        $(".vida-jugador").attr("max", jugador.pokemones[1].vida)
        $(".vida-enemigo").attr("max", jugador.pokemones[1].vida)

        $(".vida-jugador").attr("value", 120)
        $(".vida-enemigo").attr("value", 120)



        jugador.pokemones[1].ataques.forEach(element => {
            let ataque = document.createElement("li");
            ataque.innerText = element.nombre;
            ataque.className = "ataque-item";
            console.log(enemigo.pokemones[0]);
            $(ataque).click(function () {
                jugador.pokemones[1].atacar({
                    pokemonAtacado: enemigo.pokemones[0],
                    ataqueNombre: element.nombre,
                    danio: element.danio
                })
            })

            $("#lista-ataques").append(ataque);

        });



        while (enemigo.pokemones[0].vida > 0 && jugador.pokemones[0].vida > 0) {

            let ataques = document.querySelectorAll(".ataque-item");

            if (turno == 0) {
                //habilitar ataques

                ataques.disable = false;
                enemigo.pokemones[0].vida -= 20;
                //console.log(ataques);
                turno = 1;
            } else if (turno == 1) {
                //deshabilitar ataques
                this.ataqueEnemigo();
                ataques.disable = true;
                turno = 0;
            }

        }


    }

    ataqueEnemigo(){
        
    }

    
}




new Batalla().juego();