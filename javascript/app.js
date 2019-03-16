$(document).ready(function () {
     // Grabbing and storing the data-zodiac property value from the button
    var zodiac = $(this).attr("data-zodiac");
    $(".zodiacButtons").on("click", function(){
        console.log("tests");
        var varPisces = $(this).val();
    //Constructing a queryURL using the zodiac name
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + varPisces + "&limit=9&api_key=B7PAWslLghQuIeVa58WmuDFqRY3QKKLu";
    //AJAX
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response){
          var results = response.data //API syntax
          console.log(response.data);
          console.log(results);
          //for loop through each result item
          for (var i = 0; i < results.length; i++)  {
              var zodiacDiv = $("<div>");//creating and storing a div tag
              zodiacDiv.addClass("zodiacGifs");
              var p = $("<p>").text("Rating: " + results[i].rating);//creating a <p> tag with the result item's rating
              var zodiacImage = $("<img>");
              //setting the src attribute of the image to a property pulled off the result item
              zodiacImage.attr("src", results[i].images.fixed_height.url);
              //appending the <p> and <img> tag to the zodiacDiv
              zodiacDiv.append(p);
              zodiacDiv.append(zodiacImage);
              //prepend the zodiacDiv to the HTML page
              $("#gifs-appear-here").prepend(zodiacDiv);
          }
      })
    })
   


})