var mainBtn = document.getElementById("mainBtn");

mainBtn.addEventListener("click", getPokemon);
 var arr = [];
function getPokemon() {  
   
    for(var i = 1; i < 7; i++){    
        var pokemonURL = "http://pokeapi.co/api/v2/pokemon/" + i;
        var imageURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" + i + ".png";
        var largeImageURL = "large-images/pokemon" + i + ".png";    
        $.getJSON(pokemonURL, function (pokemon) { 
             var item = {};
             item.name = pokemon.name;
             item.weight = pokemon.weight; 
             item.img = pokemon.sprites.front_default; 
             item.largeImage = largeImageURL; 
             arr.push(item);
             console.log(item); 
             var contentHTML = document.getElementById('pic-container');
             contentHTML.innerHTML += "<a href=" + item.largeImage + " class='item' data-lightbox='gallery' data-title='pokemon picture'>" + "<img src=" + item.img + " alt='pokemon picture'>" +  "</a>";    
         });     
        
     }
};

/*
function getPokemon() {  
   
    for(var i = 1; i < 7; i++){    
        var pokemonURL = "http://pokeapi.co/api/v2/pokemon/" + i;
        var imageURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" + i + ".png";
        var largeImageURL = "large-images/pokemon" + i + ".png";    
        $.getJSON(pokemonURL, function (pokemon) { 
             var item = {};
             item.name = pokemon.name;
             item.weight = pokemon.weight; 
             item.img = pokemon.sprites.front_default; 
             item.largeImage = largeImageURL; 
             arr.push(item);
             console.log(item);
             //console.log(arr); 
             var contentHTML = document.getElementById('pic-container');
             contentHTML.innerHTML += "<a href=" + item.largeImage + " class='item' data-lightbox='gallery' data-title='pokemon picture'>" + "<img src=" + item.img + " alt='pokemon picture'>" +  "</a>";
            //contentHTML.innerHTML += "<p>" + item.name + "</p>";          
            //contentHTML.innerHTML += "<p>" + item.weight + "</p>";    
         });     
        
     }
};

*/

// An example
/*
var arr = [];
for(var i = 0; i < 6; i++) {
   $.getJSON(url, function(data) {
      var item = {};
      item.img = data.img;
      item.name = data.name;
      arr.push(item);
   }
}
*/


 /* https://stackoverflow.com/questions/19054997/push-is-overwriting-previous-data-in-array

 for (var i = 0; i < (UserData.length); i++) {  
        alert(UserData[i].firstname);
    }
    
*/