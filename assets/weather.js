//weather widget logic
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?lat=51.509865&lon=-0.118092&appid=357cdcf1a256d647fa7f59d91404eade" ;

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
  console.log(response)
            for(var i=0;i<4; i++){
            var weatherIcon= $("<p>")   ;
            var weatherCondition=response.list[i].weather[0].id;
            var divtest= $("<div>") ;
            divtest.css("width","300px")
            divtest.css("color","white")
            if(weatherCondition==800){
                weatherIcon.attr("src", "https://openweathermap.org/img/wn/01d@2x.png")
              }else if(weatherCondition==801){
                weatherIcon.attr("src", "https://openweathermap.org/img/wn/02d@2x.png")
              }else if(weatherCondition==802){
                weatherIcon.attr("src", "https://openweathermap.org/img/wn/03d@2x.png")
              }else if(weatherCondition>=803){
                
                weatherIcon.text("Weather: "+response.list[i].weather[0].description);
                divtest.css({"background-image":"url(assets/images/brokencloudsN.jpg)", "background-size": "cover"})
              }else if(weatherCondition>=200 && weatherCondition<=232){
                weatherIcon.attr("src", "https://openweathermap.org/img/wn/11d@2x.png")
              }else if(weatherCondition>=300 && weatherCondition<=321){
                weatherIcon.attr("src", "https://openweathermap.org/img/wn/09d@2x.png")
              }else if(weatherCondition>=500 && weatherCondition<=504){
                weatherIcon.attr("src", "https://openweathermap.org/img/wn/10d@2x.png")
              }else if(weatherCondition>=520 && weatherCondition<=531){
                weatherIcon.attr("src", "https://openweathermap.org/img/wn/09d@2x.png")
              }else if(weatherCondition>=511){
                weatherIcon.attr("src", "https://openweathermap.org/img/wn/13d@2x.png")
              }else if(weatherCondition>=600 && weatherCondition<=622){
                weatherIcon.attr("src", "https://openweathermap.org/img/wn/13d@2x.png")
              }else if(weatherCondition>=701 && weatherCondition<=781){
                weatherIcon.attr("src", "https://openweathermap.org/img/wn/50d@2x.png")
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
            divtest.append(p1,weatherIcon,p2,p3,p4)
        }
            
  })
