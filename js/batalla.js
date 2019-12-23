var Charizard = new  Pokemon("Charizard","../img/pokemon-01.png","fuego",120,[
    new Ataques("fuego","ascuas",30),
    new Ataques("agua","lanzallamas",75)
]);



var Garchomp = new Pokemon("Garchomp","../img/pokemon-06.png","Dragon",150,[
    new Ataques("fuego","Terremoto",100),
    new Ataques("agua","Carga Dragon",100)
]);

var Pikachu = new Pokemon("Garchomp","../img/pokemon-06.png","Dragon",150,[
    new Ataques("fuego","Terremoto",100),
    new Ataques("agua","Carga Dragon",100)
]);


var jugador = new Entrenador("yo",[Garchomp,Pikachu]);
var enemigo = new Entrenador("Gary",[Charizard,Charizard]);

 $('#pokemon-jugador').attr('src',jugador.pokemones[0].sprite);
 $('#pokemon-enemigo').attr('src',enemigo.pokemones[0].sprite);


$(".vida-jugador").attr("max", jugador.pokemones[1].vida)
$(".vida-enemigo").attr("max", jugador.pokemones[1].vida)

$(".vida-jugador").attr("value", 120)
$(".vida-enemigo").attr("value", 120)




 jugador.pokemones[1].ataques.forEach(element => {
    let ataque = document.createElement("li");
    ataque.innerText = element.nombre;
    console.log(enemigo.pokemones[0]);
    $(ataque).click(function(){
        jugador.pokemones[1].atacar({
            pokemon : enemigo.pokemones[0], 
            ataqueNombre : element.nombre,
            danio : element.danio
        })
    })


     $("#lista-ataques").append(ataque);

 });


function hola(){
    console.log("hola")
}