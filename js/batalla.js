//PLANTA
var PetalBlizzard= new Ataques("Planta","Petal Blizzard",90,"../img/ataquePlanta.png");
var RazorLeaf = new Ataques("Planta","Razor Leaf",55,"../img/ataquePlanta.png");
var SolarBeam = new Ataques("Planta","Solar Beam",120,"../img/ataquePlanta.png");

//NORMAL
var DobleEdge = new Ataques("Normal","Doble Edge",120,"../img/ataqueNormal.png");
var Slash = new Ataques("Normal","Slash",70,"../img/ataqueNormal.png");
var SkullBash = new Ataques("Normal","Skull Bash",130,"../img/ataqueNormal.png");
var QuickAttack = new Ataques("Normal","Quick Attack",40,"../img/ataqueNormal.png");
var Swift = new Ataques("Normal","Swift",60,"../img/ataqueNormal.png");

//FUEGO
var Flamethrower = new Ataques("Fuego","Flamethrower",90,"../img/ataqueFuego.png");

//FANTASMA
var ShadowClaw = new Ataques("Fantasma","Shadow Claw",70,"../img/ataqueFantasma.png");
var ShadowBall = new Ataques("Fantasma","Shadow Ball",80,"../img/ataqueFantasma.png")

//DRAGON
var DragonClaw = new Ataques("Dragon","Dragon Claw",80,"../img/ataqueDragon.png");
var Twister = new Ataques("Dragon","Twister",40,"../img/ataqueDragon.png");
//AGUA
var WaterPulse = new Ataques("Agua","Water Pulse",60,"../img/ataqueAgua.png");
var HydroPump = new Ataques("Agua","Hydro Pump",110,"../img/ataqueAgua.png");

//SINIESTRO
var Bite = new Ataques("Siniestro","Bite",60,"");
var SuckerPunch = new Ataques("Siniestro","Sucker Punch",70,"");
var DarkPulse = new Ataques("Siniestro","Dark Pulse",80,"");

//VOLADOR
var AirSlash = new Ataques("Volador","Air Slash",75,"");
var WingAttack = new Ataques("Volador","Wing Attack",60,"");
var DrillPeck = new Ataques("Volador","Drill Peck",80,"");

//ELECTRICO
var Thunder = new Ataques("Electrico","Thunder",110,"../img/ataqueElectrico.png");
var Lighting = new Ataques("Electrico","Lighting",90,"../img/ataqueElectrico.png");

//PSIQUICO
var Psychic = new Ataques("Psiquico","Psychic",90,"");

//LUCHA
var Aura_Sphere = new Ataques("Lucha","Aura Sphere",80,"../img/ataqueLucha.png");

//TIERRA
var Earthquake = new Ataques("Tierra","Earthquake",100,"../img/ataqueTierra.png");


//POKEMONS
var Venusaur = new Pokemon("Venusaur", "../img/pokemon-01.png", "Planta", 200, [
    PetalBlizzard,
    RazorLeaf,
    SolarBeam,
    DobleEdge
]);


var Charizard = new Pokemon("Charizard", "../img/pokemon-02.png", "Fuego", 300, [
    Slash,
    Flamethrower,
    ShadowClaw,
    DragonClaw
]);

var Blastoise = new Pokemon("Blastoise", "../img/pokemon-03.png", "Agua", 300, [
    WaterPulse,
    HydroPump,
    SkullBash,
    Bite
]);

var Pidgeot = new Pokemon("Pidgeot", "../img/pokemon-04.png", "Volador", 300, [
    QuickAttack,
    AirSlash,
    WingAttack,
    Twister
]);

var Arcanine = new Pokemon("Arcanine", "../img/pokemon-13.png", "Fuego", 300, [
    Flamethrower,
    Bite,
    SkullBash,
    DobleEdge
]);

var Gengar = new Pokemon("Gengar", "../img/pokemon-14.png", "Fantasma", 300, [
    SuckerPunch,
    ShadowBall,
    DarkPulse,
    DobleEdge
]);

var Zapdos = new Pokemon("Zapdos", "../img/pokemon-15.png", "Electrico", 300, [
    DrillPeck,
    AirSlash,
    Lighting,
    Thunder
]);

var Mewtwo = new Pokemon("Mewtwo", "../img/pokemon-16.png", "Psiquico", 300, [
    Psychic,
    Aura_Sphere,
    Swift,
    Earthquake
]);

//ARRAY DE POKEMONS
var arrayPok = [Venusaur,Charizard,Blastoise,Pidgeot,Arcanine,Gengar,Zapdos,Mewtwo]

//Declaracion de entrenadores
var jugador = new Entrenador("yo", [Venusaur,Charizard,Blastoise]);
var enemigo = new Entrenador("Gary", [Pidgeot,Arcanine,Blastoise]);

var controlador = new BatallaControlador(jugador,enemigo);
var vista = new VistaBatalla(controlador,arrayPok);

vista.inicio();