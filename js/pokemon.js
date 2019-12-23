class Pokemon {
    constructor (nombre,sprite,tipo,vida,ataques){
        this.nombre = nombre,
        this.sprite = sprite,
        this.tipo = tipo,
        this.vida = vida,
        this.ataques = ataques
    }

    atacar({
        pokemon, 
        ataqueNombre ,
        danio
    }){
        console.log("aaaaaa" +pokemon);
        console.log("bbbbbbbbbb" +danio);
        pokemon.perderVida(danio,pokemon);
    }

    perderVida(danio,pokemon){
        console.log(pokemon.vida)
        pokemon.vida -= danio;
        console.log(pokemon.vida);
    }

}