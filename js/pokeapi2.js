var mainBtn = document.getElementById("mainBtn");

mainBtn.addEventListener("click", getPokemon);

function getPokemon() {   
   for(var i = 1; i < 7; i++){    
        var pokemonURL = "http://pokeapi.co/api/v2/pokemon/" + i;
        var imageURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" + i + ".png";
        var largeImageURL = "large-images/pokemon" + i + ".png";      
        $.getJSON(pokemonURL, function (pokemon) { 
             var pokemonName = pokemon.name;
             var pokemonWeight = pokemon.weight; 
             var pokemonImage = pokemon.sprites.front_default;
             var contentHTML = document.getElementById('pic-container');
            contentHTML.innerHTML += "<a href=" + largeImageURL + " class='item' data-lightbox='gallery' data-title='pokemon picture'>" + "<img src=" + pokemonImage + " alt='pokemon picture'>" +  "</a>";
            contentHTML.innerHTML += "<p>" + pokemonName + "</p>";          
            contentHTML.innerHTML += "<p>" + pokemonWeight + "</p>";    
         });     
        
     }
};



 