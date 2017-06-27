$(document).ready(function () {
    var arr = [];
    var pokeName = "";
    for (var i = 0, t = 151; i < 11; i++) {
        arr.push(Math.round(Math.random() * t))
    }
    arr.forEach(function (random) {
        console.log(random);
        var pokeURL = "http://pokeapi.co/api/v1/pokemon/" + random;
        var pokeImage = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + random + ".png";
        $.getJSON(pokeURL, function (data) {
            var pokeName = data.name;
            document.getElementById('main').innerHTML += "<h3>" + pokeName + "</h3>" + "<img src=" + pokeImage + ">";
        });
    });
});





// An example
var arr = [];
for(var i = 0; i < 6; i++) {
   $.getJSON(url, function(data) {
      var item = {};
      item.img = data.img;
      item.name = data.name;
      arr.push(item);
   });
}

//tcherokee
 function getPokemon() {
   var numberOfPokemon = 7;
    var pokemonURLs = [];

    for(var i = 0; i<numberOfPokemon; i++) {
      pokemonURLs.push("http://pokeapi.co/api/v2/pokemon/" + (i+1));
    };

    $.each(pokemonURLs, function(i, index){
      $.getJSON(index, function(pokemon){
        var j = i+1; //so you do not run into errors trying to access pokemon 0
        var item = {};
        item.name = pokemon.name;
        item.weight = pokemon.weight;
        item.img = pokemon.sprites.front_default;
        item.largeImage = "large-images/pokemon" + j + ".png";

        console.log(item);
      });
    });
 };
             