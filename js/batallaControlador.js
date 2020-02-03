class BatallaControlador{
    
    constructor(jugador,enemigo){
        this.jugador = jugador;
        this.enemigo = enemigo;
    }

    seleccionPokemon(){
        let pokemonElegido = parseInt(prompt("Elige el pokemon "));
        let enemigoPokemon = parseInt(Math.random() *(this.enemigo.pokemones.length - 0) + 0);

        this.jugador.setPokemonActivo(pokemonElegido);
        this.enemigo.setPokemonActivo(enemigoPokemon);
    }

    ataqueJugador(pokemonElegido,enemigoPokemon,danio) {
        console.log("ENEMIGO QUE VAMOS ATACAR " + enemigo);
        pokemonElegido.atacar(enemigoPokemon, danio);
        this.cambioTurno(pokemonElegido,enemigoPokemon);
    }

    cambioTurno(pokemonElegido,enemigoPokemon) {
                
        if(enemigoPokemon.vida > 0){
            this.ataqueEnemigo(pokemonElegido,enemigoPokemon);
            $("p.vida-valor-enemigo").text(enemigoPokemon.vida)
        } else {
            console.log("GANAMOS");
            $("p.vida-valor-enemigo").text(enemigoPokemon.vida)
            setTimeout(()=>alert("Ganaste"),100)
        }
    }

    ataqueEnemigo(pokemonElegido,enemigoPokemon){
        
        console.log("vida nuestra" + pokemonElegido.vida);
        pokemonElegido.vida -= enemigoPokemon.ataques[parseInt(Math.random() *(enemigoPokemon.ataques.length - 0) + 0)].danio;
        $("p.vida-valor-jugador").text(pokemonElegido.vida)
        console.log("VIDA NUESTRA DESPUES DEL ATAQUE " + pokemonElegido.vida);
        if(pokemonElegido.vida <= 0){
            $("p.vida-valor-jugador").text(pokemonElegido.vida)
            this.perdimos();
        }
    }

    perdimos(){
        console.log("PERDIMOS");
        setTimeout(()=>alert("Perdiste"),100)
        
    }
}




