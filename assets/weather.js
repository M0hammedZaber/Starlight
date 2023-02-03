//weather widget logic
var getWeatherForecast=function(latitude,longitude){
var lat=36.6754; //this will be changed later to Geolocation API feedback
var lon=-6.5463; //this will be changed later to Geolocation API feedback
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&appid=357cdcf1a256d647fa7f59d91404eade" ;

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
  //console.log(response)
            for(var i=0;i<4; i++){
            var weatherType= $("<p>")   ;
            var weatherCondition=response.list[i].weather[0].id;
            var divtest= $("<div>") ;
            divtest.css("width","300px")
            divtest.css("color","white")
            if(weatherCondition==800){
               // weatherIcon.attr("src", "https://openweathermap.org/img/wn/01d@2x.png")
                weatherType.text("Weather: "+response.list[i].weather[0].description);
                divtest.css({"background-image":"url(assets/images/clearsky.jpg)", "background-size": "cover"})
              }else if(weatherCondition==801){
                weatherType.text("Weather: "+response.list[i].weather[0].description);
                divtest.css({"background-image":"url(assets/images/fewclouds.jpg)", "background-size": "cover"})
             
              }else if(weatherCondition==802){
                weatherType.text("Weather: "+response.list[i].weather[0].description);
                divtest.css({"background-image":"url(assets/images/scatteredclouds.jpg)", "background-size": "cover"})
             
              }else if(weatherCondition>=803){
                
                weatherType.text("Weather: "+response.list[i].weather[0].description);
                divtest.css({"background-image":"url(assets/images/brokencloudsN.jpg)", "background-size": "cover"})
              }else if(weatherCondition>=200 && weatherCondition<=232){
                weatherType.text("Weather: "+response.list[i].weather[0].description);
                divtest.css({"background-image":"url(assets/images/thunderstorm.jpg)", "background-size": "cover"})
              }else if(weatherCondition>=300 && weatherCondition<=321){
                weatherType.text("Weather: "+response.list[i].weather[0].description);
                divtest.css({"background-image":"url(assets/images/drizzle.jpg)", "background-size": "cover"})
              }else if(weatherCondition>=500 && weatherCondition<=531){
                weatherType.text("Weather: "+response.list[i].weather[0].description);
                divtest.css({"background-image":"url(assets/images/rain.jpg)", "background-size": "cover"})
              }else if(weatherCondition>=511){
                weatherType.text("Weather: "+response.list[i].weather[0].description);
                divtest.css({"background-image":"url(assets/images/freezingrain.jpg)", "background-size": "cover"})
              }else if(weatherCondition>=600 && weatherCondition<=622){
                weatherType.text("Weather: "+response.list[i].weather[0].description);
                divtest.css({"background-image":"url(assets/images/snow.jpg)", "background-size": "cover"})
              }else if(weatherCondition>=701 && weatherCondition<=781){
                weatherType.text("Weather: "+response.list[i].weather[0].description);
                divtest.css({"background-image":"url(assets/images/fog.jpg)", "background-size": "cover"})
              }    
            var p1=$("<p>").text(response.city.name +" ("+ response.list[i].dt_txt+")");
            p1.css({"font-weight": "bold"});
            var temp=response.list[i].main.temp-273.15;
            var p2=$("<p>").text("Temp: "+temp.toFixed(2)+"°C");
            var p3=$("<p>").text("Visibility: up to "+response.list[i].visibility+" metres");
            //30-60% Partly cloudy. 60-70% Partly sunny. 70-90% Mostly cloudy. 90-100% Overcast.
            if(response.list[i].clouds.all<30){
                var p4=$("<p>").text("Cloudiness: "+response.list[i].clouds.all+"% Clear sky");
            }else if(response.list[i].clouds.all<60 && response.list[i].clouds.all>30){
                var p4=$("<p>").text("Cloudiness: "+response.list[i].clouds.all+"% Partly cloudy");
            }else if(response.list[i].clouds.all<70 && response.list[i].clouds.all>60){
                var p4=$("<p>").text("Cloudiness: "+response.list[i].clouds.all+"% Partly sunny");
            }else if(response.list[i].clouds.all<90 && response.list[i].clouds.all>70){
                var p4=$("<p>").text("Cloudiness: "+response.list[i].clouds.all+"% Mostly cloudy");
            }else if(response.list[i].clouds.all>90){
                var p4=$("<p>").text("Cloudiness: "+response.list[i].clouds.all+"% Overcast sky");
            }
            
            $("body").append(divtest)
            divtest.append(p1,weatherType,p2,p3,p4)
        }
            
  })
}
getWeatherForecast();