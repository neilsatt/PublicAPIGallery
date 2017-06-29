window.onload = function() {
  getPokemon();
};

 function getPokemon() {
   var numberOfPokemon = 7;
    var pokemonURLs = [];

    for(var i = 1; i<numberOfPokemon; i++) {
      pokemonURLs.push("http://pokeapi.co/api/v2/pokemon/" + i);
    }

    $.each(pokemonURLs, function(i, index){
      $.getJSON(index, function(pokemon){
        var j = i+1; //so you do not run into errors trying to access pokemon 0
        var item = {};
        item.name = pokemon.name;
        item.height = pokemon.height;
        item.weight = pokemon.weight;
        item.img = pokemon.sprites.front_default;
        item.largeImage = "large-images/pokemon" + j + ".png";
        pokemonURLs.push(item); 
        
         console.log(item); 
         var contentHTML = document.getElementById('pic-container');
          
         contentHTML.innerHTML += "<a href=" + item.largeImage + " data-lightbox='gallery' data-title=" + item.name  + '----' + "height=" + item.height + '----' + "weight=" + item.weight + ">" + "<img src=" + item.img + " alt='pokemon picture' + class='small-img'>" +  "</a>";       
      });
    });
 }



