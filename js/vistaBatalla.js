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
