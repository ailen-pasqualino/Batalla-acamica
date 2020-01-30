class VistaBatalla{
    constructor(controlador,arrayPokemones){
        this.controlador = controlador;
        this.arrayPokemones = arrayPokemones;
    }

    inicio(){   

        this.controlador.seleccionPokemon();
        this.controlador.seleccionEnemigo();
        
        var pokemonJugadorPeleando = this.controlador.jugador.pokemonElegido;
        var pokemonEnemigoPeleando = this.controlador.enemigo.pokemonElegido;

        this.dibujosJugador();
        this.dibujosEnemigo();
        
         pokemonJugadorPeleando.ataques.forEach(element => {
            let ataque = document.createElement("li");
            let im = document.createElement("img");
            im.src = element.sprite;
            let p = document.createElement("p");
            p.innerText = element.nombre;
            //ataque.innerText = element.nombre;
            ataque.className = "ataque-item";
            
            //controlador
            $(ataque).click(function () {
                console.log("DAÑOO " + ataque);
                controlador.ataqueJugador(pokemonJugadorPeleando,pokemonEnemigoPeleando,element.danio);
                $(".vida-enemigo").attr("value", pokemonEnemigoPeleando.vida);
                $(".vida-jugador").attr("value", pokemonJugadorPeleando.vida);
            })
            ataque.append(p);
            ataque.append(im);
            $("#lista-ataques").append(ataque);
            
            
        });
    }

    dibujosJugador(){
        $('#pokemon-jugador').attr('src', this.controlador.jugador.pokemonElegido.sprite);
         $(".vida-jugador").attr("max", this.controlador.jugador.pokemonElegido.vida);
         $(".vida-jugador").attr("value", this.controlador.jugador.pokemonElegido.vida);
         
    }


    dibujosEnemigo(){
        $('#pokemon-enemigo').attr('src', this.controlador.enemigo.pokemonElegido.sprite);
        $(".vida-enemigo").attr("max", this.controlador.enemigo.pokemonElegido.vida);
        $(".vida-enemigo").attr("value", this.controlador.enemigo.pokemonElegido.vida);
    }

}
