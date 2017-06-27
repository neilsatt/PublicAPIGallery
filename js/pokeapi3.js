var mainBtn = document.getElementById("mainBtn");

mainBtn.addEventListener("click", getPokemon);

/*
 var arr = [];
function getPokemon() {
    var numOfPokemon = 6;
   
    for(var i = 0; i < numOfPokemon; i++){    
        var pokemonURL = "http://pokeapi.co/api/v2/pokemon/" + i;
        var imageURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" + i + ".png";
        var largeImageURL = "large-images/pokemon" + i + ".png";    
        $.getJSON(pokemonURL, function (pokemon) { 
             var item = {};
             item.name = pokemon.name;
             item.weight = pokemon.weight; 
             item.img = pokemon.sprites.front_default;
             for(j=0; j<numOfPokemon; j++) {
                item.largeImage = largeImageURL; 
             }
             arr.push(item);
             console.log(item); 
             var contentHTML = document.getElementById('pic-container');
             contentHTML.innerHTML += "<a href=" + item.largeImage + " class='item' data-lightbox='gallery' data-title='pokemon picture'>" + "<img src=" + item.img + " alt='pokemon picture'>" +  "</a>";    
         });     
        
     }
};
*/



 function getPokemon() {
   var numberOfPokemon = 7;
    var pokemonURLs = [];

    for(var i = 1; i<numberOfPokemon; i++) {
      pokemonURLs.push("http://pokeapi.co/api/v2/pokemon/" + i);
    };

    $.each(pokemonURLs, function(i, index){
      $.getJSON(index, function(pokemon){
        var j = i+1; //so you do not run into errors trying to access pokemon 0
        var item = {};
        item.name = pokemon.name;
        item.weight = pokemon.weight;
        item.img = pokemon.sprites.front_default;
        item.largeImage = "large-images/pokemon" + j + ".png";
        pokemonURLs.push(item); 
        
         console.log(item); 
         var contentHTML = document.getElementById('pic-container');
         contentHTML.innerHTML += "<a href=" + item.largeImage + " data-lightbox='gallery' data-title=" + item.name +">" + "<img src=" + item.img + " alt='pokemon picture' + class='small-img'>" +  "</a>";  
         var textHTML = document.getElementById('textHTML');
         textHTML.innerHTML += "<p>" + item.name + "</p>";
         textHTML.innerHTML += "<p>" + item.weight + "</p>";
            

        
      });
    });
 };


