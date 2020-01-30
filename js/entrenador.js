class Entrenador {
    constructor(nombre,pokemones, pokeVivos,lisPok){
        this.nombre = nombre;
        this.pokemones = pokemones;
        this.pokemones_vivos = pokeVivos;
        this.pokemonElegido;
    }

    setPokemonActivo(numLisPok){
        this.pokemonElegido = this.pokemones[numLisPok]
    }

}