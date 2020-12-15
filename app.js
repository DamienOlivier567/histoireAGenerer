let name = [
    "Erwin",
    "Eren",
    "Livai",
    "Mikasa",
    "Armin"
];

let objet = [
    " une Eppé",
    " un Equipement Tridimentionelle",
    " un Balais",
    " une Hache"
];

let temperature = [
    "10°",
    "20°",
    "15°",
    "5°",
    "0°"
];

let places = [
    " à la Zone d'entrainement ",
    " aux District de Trost ",
    " aux District de Shiganshina ",
    " à l'Exterieur des murs ",
    " aux District de Stohese "
];

let verbs = [
    "Se Bat contre les Titans",
    "S'entraine",
    "Se Bat contre le Cuirasse",
    "Se Bat contre le Colosal",
    "Se Bat contre le Bestial"
];

let nameUser = document.getElementById('name');

let history = document.getElementById('history');
let button = document.getElementById('button');

button.addEventListener('click', function (){
    history.innerHTML +=  name[Math.floor(Math.random() * name.length)] + " avec " + objet[Math.floor(Math.random() * objet.length)]
        + " a une temperature de " + temperature[Math.floor(Math.random() * temperature.length)] + " se trouve "
        + places[Math.floor(Math.random() * places.length)] + verbs[Math.floor(Math.random() * verbs.length)]
        + " ! " + " Cette Histoire a ete generer par " + nameUser.value + '<br>';
});



