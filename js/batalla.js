


var Charizard = new  Pokemon("Charizard","../img/pokemon-01.png",120,"fuego",[
    new Ataque("ascuas",30),
    new Ataque("lanzallamas",75)
]);



var Garchomp = new Pokemon("Garchomp","../img/pokemon-06.png",150,"Dragon",[
    new Ataque("Terremoto",100),
    new Ataque("Carga Dragon",100)
]);


var jugador = new Entrenador("yo",Garchomp);
var enemigo = new Entrenador("Gary",Charizard);