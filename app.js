let name = [
    "Erwin",
    "Eren",
    "Livai",
    "Mikasa",
    "Armin"];
const randomName = name[Math.floor(Math.random() * name.length)];
let objet = [
    " une Eppé",
    " un Equipement Tridimentionelle",
    " un Balais",
    " une Hache"
];
const randomObjet = objet[Math.floor(Math.random() * objet.length)];
let temperature = ["10°", "20°", "15°", "5°", "0°"];
const randomTemperature = temperature[Math.floor(Math.random() * temperature.length)];
let places = [
    " à la Zone d'entrainement ",
    " aux District de Trost ",
    " aux District de Shiganshina ",
    " à l'Exterieur des murs ",
    " aux District de Stohese "
];
const randomPlaces = places[Math.floor(Math.random() * places.length)];
let verbs = [
    "Se Bat contre les Titans",
    "S'entraine",
    "Se Bat contre le Cuirasse",
    "Se Bat contre le Colosal",
    "Se Bat contre le Bestial"
];
const randomVerbs = verbs[Math.floor(Math.random() * verbs.length)];

let history = document.getElementById('history');
let button = document.getElementById('button');
button.addEventListener('click', function (){
    history.innerHTML = randomName + " avec " + randomObjet + " a une temperature de " + randomTemperature + " se trouve " + randomPlaces + randomVerbs;
})