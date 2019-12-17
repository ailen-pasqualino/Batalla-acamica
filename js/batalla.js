var Charizard = new  Pokemon("Charizard","../img/pokemon-01.png",120,"fuego",[
    new Ataques("fuego","ascuas",30),
    new Ataques("agua","lanzallamas",75)
]);



var Garchomp = new Pokemon("Garchomp","../img/pokemon-06.png","Dragon",150,[
    new Ataques("fuego","Terremoto",100),
    new Ataques("agua","Carga Dragon",100)
]);


var jugador = new Entrenador("yo",[Garchomp]);
var enemigo = new Entrenador("Gary",[Charizard]);

 $('#pokemon-jugador').attr('src',jugador.pokemones[0].sprite);
 $('#pokemon-enemigo').attr('src',enemigo.pokemones[0].sprite);
