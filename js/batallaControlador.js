class BatallaControlador{
    
    constructor(jugador,enemigo){
        this.jugador = jugador;
        this.enemigo = enemigo;
    }
   
}

var turno = 0;


function ataqueJugador() {
    console.log("ENEMIGO QUE VAMOS ATACAR " + enemigo.pokemones[enemigoPokemon]);
    console.log("DANIO " + element.danio);
    jugador.pokemones[pokemonElegido].atacar(enemigo.pokemones[enemigoPokemon], element.nombre, element.danio);
    barraVidaEnemigo.attr("value", enemigo.pokemones[enemigoPokemon].vida);
    turno = 1;
    cambioTurno();
}

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

