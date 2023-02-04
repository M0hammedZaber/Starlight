// overall website logic

//sunset-sunrise logic
var getSunsetSunrise = function(latitude,longitude) {
    var queryURL="https://api.sunrise-sunset.org/json?lat="+latitude+"&lng="+longitude;
    console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
    }) .then(function(response){
        var sunrise = response.results.sunrise;
        var sunset = response.results.sunset;
        $("i.fa-sun").text(" "+sunrise); // ------------needs updating; originally was attached directly to the icon
        $("i.fa-moon").text(" "+sunset); // ------------needs updating; originally was attached directly to the icon
    });
}