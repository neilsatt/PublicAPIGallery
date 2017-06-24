var mainBtn = document.getElementById("mainBtn");

mainBtn.addEventListener("click", getRandomPokemon);

//var pokemonArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];  // first 20 items from array  

function getRandomPokemon() {    // originalArray - 1st param
    //var finalArray = [];
    // pick 6 random items
    for(var i = 1; i < 7; i++){
        //finalArray.push(originalArray[Math.floor(Math.random() * pokemonArray.length)]);
       var pokemonURL = "http://pokeapi.co/api/v1/pokemon/" + i;
       var pokeImage = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" + i + ".png";
        $.getJSON(pokemonURL, function ( data) {    
            var pokeName = data.name;
            console.log(pokeName);
            console.log('i value2: '+i);
            
            document.getElementById('content-container').innerHTML += "<h3>" + pokeName + "</h3>" +  "<img src=" + pokeImage +">";
        });
    }

   // return finalArray;
};


/*
 var photoHTML = '<ul>';
      $.each(data.items,function(i,photo) {
        photoHTML += '<li class="grid-25 tablet-grid-50">';
        photoHTML += '<a href="' + photo.link + '" class="image">';
        photoHTML += '<img src="' + photo.media.m + '"></a></li>';
      }); // end each
      photoHTML += '</ul>';
       $('#photos').html(photoHTML);


*/
 
//function showRandomPokemon() {
// var randomPokemons = getRandomPokemon(pokemonArray, 7);   
// console.log(randomPokemons);
//}
            //var pokemonAPI = "http://pokeapi.co/api/v2/pokemon/" + i;
            //var pokemonImage = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + i + ".png";  
            //data =  $.getJSON(index.ability.url, pokemonAbilities);
    


   
/*  Example from Slack 

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




*/