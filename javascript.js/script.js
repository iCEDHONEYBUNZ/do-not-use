var repository = [
    {name:'bulbasaur', height: 0.7, types: ['grass', 'fire'] },
    {name:'charmander', height: 0.6, types: ['fire'] },
    {name:'cloyster', height: 1.5, types: ['ice', 'water'] }
];

for (let i = 0; i < repository.length; i++) {
    let pokemon = repository[i];
    if (pokemon.height > 5){
        document.write(
            pokemon.name +
            ''+
            ''+
            'height:' +
            ''+
            pokemon.height +
            '' +
            ' -' +
            ''+
            "wow, thats big!"
        );
    } else {
        document.write(
            pokemon.name +
            '' +
            '' +
            'height:' +
            '' +
            '<br>' +
            '<br>'
        );
    }
}