class BatallaControlador{
    
    constructor(jugador,enemigo,turno){
        this.jugador = jugador;
        this.enemigo = enemigo;
        this.turno = turno;
    }

    ataqueJugador(pokemonElegido,enemigoPokemon,danio) {
        console.log("ENEMIGO QUE VAMOS ATACAR " + enemigo);
        pokemonElegido.atacar(enemigoPokemon, danio);
        turno = 1;
        this.cambioTurno(pokemonElegido,enemigoPokemon);
    }

    cambioTurno(pokemonElegido,enemigoPokemon) {
                
        if(turno == 1 && enemigoPokemon.vida > 0){
            this.ataqueEnemigo(pokemonElegido,enemigoPokemon);
            
        } else {
            
            console.log("GANAMOS");
            alert("ganaste");
            //cambiar al otro pokemon si tiene
        }
        turno = 0;
    }

    ataqueEnemigo(pokemonElegido,enemigoPokemon){
        
        console.log("vida nuestra" + pokemonElegido.vida);
        /* enemigo.pokemones[0].atacar({
            pokemonAtacado: jugador.pokemones[0],
            ataqueNombre: element.nombre,
            danio: element.danio
        }) */
        pokemonElegido.vida -= enemigoPokemon.ataques[parseInt(Math.random() *(enemigoPokemon.ataques.length - 0) + 0)].danio;
         
        
        console.log("VIDA NUESTRA DESPUES DEL ATAQUE " + pokemonElegido.vida);
        if(pokemonElegido.vida <= 0){
            this.perdimos(pokemonElegido,enemigoPokemon);
        }
    }

    perdimos(){
        console.log("llegaaaaaaaaaaaaaaa");
       
            console.log("PERDIMOS");
            alert("Perdiste")
        
    }
}




