var mainBtn = document.getElementById("mainBtn");

mainBtn.addEventListener("click", getRandomPokemon);

function getRandomPokemon() {   

   for(var i = 1; i < 7; i++){
       
       var pokemanHTML = '<ul>';
        var pokemonURL = "http://pokeapi.co/api/v2/pokemon/" + i;
        var imageURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" + i + ".png";
         $.getJSON(pokemonURL, function (pokemon) { 
             var pokeName = pokemon.name;
             var pokeImage = pokemon.sprites.front_default;
             document.getElementById('main-content').innerHTML += "<h3>" + pokeName + "</h3>" + "<img src=" + pokeImage +">";
         });
       
        pokemanHTML += '</ul>';
     }

};

