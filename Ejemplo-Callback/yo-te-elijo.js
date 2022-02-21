function YoTeElijo(mensaje, pokemon, callback){
    return callback(mensaje, pokemon);
}

function Ash(mensaje, pokemon){
    return mensaje + pokemon;
}

function Gary(mensaje, pokemon){
    return mensaje + pokemon
}

console.log(YoTeElijo('Pikachu', ' Yo te elijo', Ash))
console.log(YoTeElijo('Ve', ' Arcanine', Gary))