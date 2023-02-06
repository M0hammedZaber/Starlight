//all comments ------------ need their selectors updated to reflect the current HTML. Please use id, not classes

var locationButtons = [$("#location1"), $("#location2"), $("#location3")]; //------------needs updating; those are the three cities <button>

$(document).ready(function() { //populates the text on the buttons from the local storage on opening
    let storedCities = JSON.parse(localStorage.getItem("cities")) || [];
    if (storedCities.length>0) {
        for (let i=0;i<3;i++) {
            var cityAppend = storedCities[i];
            var buttonId = locationButtons[i];
            buttonId.text(cityAppend);
        }

    }
    });

//geolocation logic for getMyLocation button

var bGeolocation = $("#getMyLocation"); //------------needs updating; this is the "Get my location" button
let locale; //create empty var for future
$(bGeolocation).on('click', async function(event) { //listening event triggers async function
    event.preventDefault(); //just in case
    if (navigator.geolocation) { //if browser supports geolocation
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    } else {
        swal("Error!", "Geolocation is not supported, please use the search function");
    }
});

const onSuccess = async (position) => { //if geolocation supported, this triggers response from API
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    locale=[latitude, longitude];
    getSunsetSunrise(latitude,longitude);
    //GETWEATHER(latitude,longitude) needs to go here
};
const onError = (error) => { //if geolocation fails for different reasons than browser not supporting it, this will catch the error
    swal("Error!", "Something went wrong, please use the search function");
};

//geolocation logic and localStorage logic for cities buttons 

var cityButton = $("#city");//------------needs updating; it's the button that submits the form for city input
var cityName = $("input[type=text]");//------------this will call for the text input field from the form

var weatherAPIKey = "bcd5dfb52cbaa31bb6075c699f0b7d1a";

var storage = localStorage.getItem("city");

$(cityButton).on("click",function(event) {
    event.preventDefault();
    var eventTargetValue = cityName.val();
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+eventTargetValue.trim()+",uk&appid=" + weatherAPIKey;
    
    $.ajax({
        url: queryURL,
        method: "GET",
        error: function(error) {
            swal("Error!", "There is no such city in UK. \nPlease try again");
        }
      }).then(function(response) {
        var lat = response.coord.lat;
        var lon = response.coord.lon;
        
        getSunsetSunrise(latitude,longitude);
        //GETWEATHER(latitude,longitude) needs to go here

        var newCity = JSON.parse(localStorage.getItem("cities")) || [];
        if (!Array.isArray(newCity)) { //=if an array is not (!) an array, it executes the following code
            newCity = [];
        }

        storedCities = JSON.parse(localStorage.getItem("cities")) || [];

        if (newCity.length>2) { //if the localStorage is bigger than 0,1,2, it removes the last item
            newCity.shift();
        }
        newCity.push(eventTargetValue);

        localStorage.setItem("cities",JSON.stringify(newCity));

        storedCities = newCity;

        if (storedCities.length>0) { //this generates text on the buttons
            for (let i=0;i<3;i++) {
                var cityAppend = storedCities[i];
                var buttonId = locationButtons[i];
                buttonId.text(cityAppend);
            }
        }



        
      })

})