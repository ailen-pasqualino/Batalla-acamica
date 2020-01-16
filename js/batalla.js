
        //Declaracion de pokemones
        var Charizard = new Pokemon("Charizard", "../img/pokemon-01.png", "fuego", 200, [
            new Ataques("fuego", "ascuas", 30),
            new Ataques("agua", "lanzallamas", 75)
        ]);


        var Garchomp = new Pokemon("Garchomp", "../img/pokemon-06.png", "Dragon", 300, [
            new Ataques("fuego", "holi", 100,"../img/ataque01.png"),
            new Ataques("agua", "ataque02", 100,"../img/ataque02.png"),
            new Ataques("fuego", "ataque01", 100,"../img/ataque01.png"),
            new Ataques("agua", "ataque02", 100,"../img/ataque02.png")
        ]);

        var Pikachu = new Pokemon("Pikachu", "../img/pokemon-03.png", "Dragon", 100, [
            new Ataques("fuego", "ajjajajaja", 100),
            new Ataques("agua", "eeeeeeeee", 100),
            new Ataques("dragon", "aaaaaaaaa", 40)
        ]);

        var pokemonElegido = parseInt(prompt("Elige el pokemon "));

        //Declaracion de entrenadores
        var jugador = new Entrenador("yo", [Garchomp, Pikachu]);
        var enemigo = new Entrenador("Gary", [Charizard, Pikachu]);
        //enemigo eleccion aleatoria de pokemon 
        var enemigoPokemon = parseInt(Math.random() *(enemigo.pokemones.length - 0) + 0);

        //Declaracion de vidas
        var jugadorVida = jugador.pokemones[pokemonElegido].vida;
        var enemigoVida = enemigo.pokemones[enemigoPokemon].vida;

        var turno = 0;

        //MVC

        //var controlador = new BatallaControlador(jugador,enemigo);
        //var vistaBatalla = new VistaBatalla(jugador,enemigo,controlador);
       //vistaBatalla.iniciar();

        $('#pokemon-jugador').attr('src', jugador.pokemones[pokemonElegido].sprite);
        $('#pokemon-enemigo').attr('src', enemigo.pokemones[enemigoPokemon].sprite);


        $(".vida-jugador").attr("max", jugador.pokemones[pokemonElegido].vida)
        $(".vida-enemigo").attr("max", enemigo.pokemones[enemigoPokemon].vida)



        jugador.pokemones[pokemonElegido].ataques.forEach(element => {
            let ataque = document.createElement("li");
            let im = document.createElement("img");
            im.src = element.sprite;
            let p = document.createElement("p");
            p.innerText = element.nombre;
            //ataque.innerText = element.nombre;
            ataque.className = "ataque-item";
            
            console.log(element.sprite);
            //controlador
            $(ataque).click(function () {
                console.log("ENEMIGO QUE VAMOS ATACAR " + enemigo.pokemones[enemigoPokemon]);
                console.log("DANIO " + element.danio);
                jugador.pokemones[pokemonElegido].atacar(enemigo.pokemones[enemigoPokemon], element.nombre, element.danio);
                barraVidaEnemigo.attr("value", enemigo.pokemones[enemigoPokemon].vida);
                turno = 1;
                cambioTurno();
            })
            ataque.append(im);
            ataque.append(p);
            $("#lista-ataques").append(ataque);
            
            
        });


        //Linkeamos progress bar con vidas
        let barraVidaEnemigo = $(".vida-enemigo");
        let barraVidaJugador = $(".vida-jugador");

        barraVidaJugador.attr("max", jugadorVida);
        barraVidaEnemigo.attr("max", enemigoVida);

        barraVidaJugador.attr("value", jugador.pokemones[pokemonElegido].vida);
        barraVidaEnemigo.attr("value", enemigo.pokemones[enemigoPokemon].vida);

 
            let ataques = document.querySelectorAll(".ataque-item");

           
                //enemigo.pokemones[0].vida -= 20;
                console.log("VIDA NUESTRA " + jugador.pokemones[pokemonElegido].vida);
                //console.log(ataques);
            function cambioTurno() {
                
                if(turno == 1 && enemigo.pokemones[enemigoPokemon].vida > 0){
                    ataqueEnemigo();
                    
                } else {
                    
                    console.log("GANAMOS");
                    alert("ganaste");
                    //cambiar al otro pokemon si tiene
                }
                turno = 0;
            }
                

    function ataqueEnemigo(){
        
        console.log("vida nuestra" + jugador.pokemones[pokemonElegido].vida);
        /* enemigo.pokemones[0].atacar({
            pokemonAtacado: jugador.pokemones[0],
            ataqueNombre: element.nombre,
            danio: element.danio
        }) */
        jugador.pokemones[pokemonElegido].vida -= enemigo.pokemones[enemigoPokemon].ataques[parseInt(Math.random() *(enemigo.pokemones[enemigoPokemon].ataques.length - 0) + 0)].danio;
         
        barraVidaJugador.attr("value", jugador.pokemones[pokemonElegido].vida);
        console.log("VIDA NUESTRA DESPUES DEL ATAQUE " + jugador.pokemones[pokemonElegido].vida);
        if(jugador.pokemones[pokemonElegido].vida <= 0){
            perdimos();
        }
    }


function perdimos(){
    console.log("llegaaaaaaaaaaaaaaa");
   
        console.log("PERDIMOS");
        alert("Perdiste")
    
}

//chequear si morimos --> hacer funcion
//dibujar en pantalla, bindear clicks 
//hcer controlador
//archivo que construya vista controlador y los inicie

/*

crear archivos:

-Batalla
-Vista batalla
-Batalla controlada



*/