class VistaBatalla{
    constructor(jugador,enemigo,controlador,arrayPokemones){
        this.jugador = jugador;
        this.enemigo = enemigo;
        this.controlador = controlador;
        this.arrayPokemones = arrayPokemones;
    }

    inicio(){

        var pokemonElegido = parseInt(prompt("Elige el pokemon "));
        var enemigoPokemon = parseInt(Math.random() *(enemigo.pokemones.length - 0) + 0);

        var pokemonJugadorPeleando = jugador.pokemones[pokemonElegido];
        var pokemonEnemigoPeleando = enemigo.pokemones[enemigoPokemon];


        var jugadorVida = pokemonJugadorPeleando.vida;
        var enemigoVida = pokemonEnemigoPeleando.vida;

        $('#pokemon-jugador').attr('src', pokemonJugadorPeleando.sprite);
        $('#pokemon-enemigo').attr('src', pokemonEnemigoPeleando.sprite);
        
        
        $(".vida-jugador").attr("max", pokemonJugadorPeleando.vida)
        $(".vida-enemigo").attr("max", pokemonEnemigoPeleando.vida)
        
         //Linkeamos progress bar con vidas
         let barraVidaEnemigo = $(".vida-enemigo");
         let barraVidaJugador = $(".vida-jugador");
        
         barraVidaJugador.attr("max", jugadorVida);
         barraVidaEnemigo.attr("max", enemigoVida);
        
         barraVidaJugador.attr("value", pokemonJugadorPeleando.vida);
         barraVidaEnemigo.attr("value", pokemonEnemigoPeleando.vida);
        
        
         pokemonJugadorPeleando.ataques.forEach(element => {
            let ataque = document.createElement("li");
            let im = document.createElement("img");
            im.src = element.sprite;
            let p = document.createElement("p");
            p.innerText = element.nombre;
            //ataque.innerText = element.nombre;
            ataque.className = "ataque-item";
            
            console.log(element.danio);
            //controlador
            $(ataque).click(function () {
                console.log("DAÑOO " + ataque);
                controlador.ataqueJugador(pokemonJugadorPeleando,pokemonEnemigoPeleando,element.danio);
                barraVidaEnemigo.attr("value", pokemonEnemigoPeleando.vida);
                barraVidaJugador.attr("value", pokemonJugadorPeleando.vida);
            })
            ataque.append(p);
            ataque.append(im);
            $("#lista-ataques").append(ataque);
            
            
        });
    }
}
