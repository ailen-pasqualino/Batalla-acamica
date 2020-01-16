class VistaBatalla{
    constructor(jugador,enemigo,controlador,arrayPokemones){
        this.jugador = jugador;
        this.enemigo = enemigo;
        this.controlador = controlador;
        this.arrayPokemones = arrayPokemones;
    }

    estaTodo(){
            
    }
}
$('#pokemon-jugador').attr('src', jugador.pokemones[pokemonElegido].sprite);
$('#pokemon-enemigo').attr('src', enemigo.pokemones[enemigoPokemon].sprite);


$(".vida-jugador").attr("max", jugador.pokemones[pokemonElegido].vida)
$(".vida-enemigo").attr("max", enemigo.pokemones[enemigoPokemon].vida)

 //Linkeamos progress bar con vidas
 let barraVidaEnemigo = $(".vida-enemigo");
 let barraVidaJugador = $(".vida-jugador");

 barraVidaJugador.attr("max", jugadorVida);
 barraVidaEnemigo.attr("max", enemigoVida);

 barraVidaJugador.attr("value", jugador.pokemones[pokemonElegido].vida);
 barraVidaEnemigo.attr("value", enemigo.pokemones[enemigoPokemon].vida);


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
        controlador.ataqueJugador();
    })
    ataque.append(p);
    ataque.append(im);
    $("#lista-ataques").append(ataque);
    
    
});

}