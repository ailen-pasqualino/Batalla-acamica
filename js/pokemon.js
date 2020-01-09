class Pokemon {
    constructor (nombre,sprite,tipo,vida,ataques){
        this.nombre = nombre,
        this.sprite = sprite,
        this.tipo = tipo,
        this.vida = vida,
        this.ataques = ataques
    }

    atacar(pokemonAtacado, ataqueNombre, danio){
        console.log("POKEMON QUE VA HACER ATAKADO" +pokemonAtacado);
        console.log("DANIO CAUSADO" +danio);
        pokemonAtacado.perderVida(danio,pokemonAtacado);
    }

    perderVida(danio,pokemon){
        console.log("VIDA ANTES DEL ATAQUE " +pokemon.vida)
        pokemon.vida -= danio;
        console.log("VIDA DESPUES DEL ATAQUE " +pokemon.vida);
    }

}