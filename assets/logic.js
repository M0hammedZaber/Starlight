// overall website logic

//sunset-sunrise logic
var lat=36.6754; //this will be changed later to Geolocation API feedback
var lon=-6.5463; //this will be changed later to Geolocation API feedback
var queryURL="https://api.sunrise-sunset.org/json?lat="+lat+"&lng="+lon;

$.ajax({
    url: queryURL,
    method: "GET"
}) .then(function(response){
    var sunrise = response.results.sunrise;
    var sunset = response.results.sunset;
    $("i.fa-sun").text(" "+sunrise); // this will attach the text to icon, looks quite nice
    $("i.fa-moon").text(" "+sunset); // this will attach the text to icon, looks quite nice
});
