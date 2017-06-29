var mainBtn = document.getElementById("mainBtn");

mainBtn.addEventListener("click", getRandomPokemon);

function getRandomPokemon() {   
    var photoHTML = '<ul>';
   for(var i = 1; i < 7; i++){
       
       var pokemanHTML = '<ul>';
        var pokemonURL = "http://pokeapi.co/api/v2/pokemon/" + i;
        var imageURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" + i + ".png";
         $.getJSON(pokemonURL, function (pokemon) { 
             var pokemonName = pokemon.name;
             var pokemonWeight = pokemon.weight; 
             var pokemonImage = pokemon.sprites.front_default;
             var contentHTML = document.getElementById('main-content');
				contentHTML.innerHTML += "<li>";
                contentHTML.innerHTML += "<img src=" + pokemonImage +">";
                contentHTML.innerHTML += "<p>" + pokemonName + "</p>";
                contentHTML.innerHTML += "<p>" + pokemonWeight + "</p>";
             contentHTML.innerHTML += "</li>";
         });
       
        
     }
    pokemanHTML += '</ul>';
};

