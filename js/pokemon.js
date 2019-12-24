class Pokemon {
    constructor (nombre,sprite,tipo,vida,ataques){
        this.nombre = nombre,
        this.sprite = sprite,
        this.tipo = tipo,
        this.vida = vida,
        this.ataques = ataques
    }

    atacar({
        pokemonAtacado, 
        ataqueNombre ,
        danio
    }){
        console.log("aaaaaa" +pokemonAtacado);
        console.log("bbbbbbbbbb" +danio);
        pokemonAtacado.perderVida(danio,pokemonAtacado);
    }

    perderVida(danio,pokemon){
        console.log(pokemon.vida)
        pokemon.vida -= danio;
        console.log(pokemon.vida);
    }

}