// overall website logic
var constellationsAll = [
     "Andromeda",
     "Antlia",
     "Apus",
     "Aquarius",
    "Aquila",
     "Ara",
     "Aries",
    "Auriga",
     "Boötes",
     "Caelum",
     "Camelopardalis",
     "Cancer",
     "Canes Venatici",
     "Canis Major",
     "Canis Minor",
     "Capricornus",
     "Carina",
     "Cassiopeia",
     "Centaurus",
     "Cepheus",
     "Cetus",
     "Chamaeleon",
     "Circinus",
     "Columba",
     "Coma Berenices",
     "Corona Austrina",
     "Corona Borealis",
     "Corvus",
     "Crater",
     "Crux",
     "Cygnus",
     "Delphinus",
     "Dorado",
     "Draco",
     "Equuleus",
     "Eridanus",
     "Fornax",
     "Gemini",
     "Grus",
     "Hercules",
     "Horologium",
     "Hydra",
     "Hydrus",
     "Indus",
     "Lacerta",
     "Leo",
     "Leo Minor",
     "Lepus",
     "Libra",
     "Lupus",
     "Lynx",
     "Lyra",
     "Mensa",
     "Microscopium",
     "Monoceros",
     "Musca",
     "Norma",
    "Octans",
    "Ophiuchus",
     "Orion",
     "Pavo",
     "Pegasus",
     "Perseus",
     "Phoenix",
     "Pictor",
     "Pisces",
     "Piscis Austrinus",
     "Puppis",
     "Pyxis",
     "Reticulum",
     "Sagitta",
     "Sagittarius",
     "Scorpius",
     "Sculptor",
     "Scutum",
     "Serpens Caput",
     "Serpens Cauda",
     "Sextans",
     "Taurus",
     "Telescopium",
     "Triangulum",
     "Triangulum Australe",
     "Tucana",
     "Ursa Major",
     "Ursa Minor",
     "Vela",
    "Virgo",
     "Volans",
     "Vulpecula"
  ];

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
        
        var riseicon=$("<i>")
        var seticon=$("<i>")
        riseicon.addClass("fas fa-sun")
        seticon.addClass("fas fa-moon")
        riseicon.text(" "+sunrise); // ------------needs updating; originally was attached directly to the icon
        seticon.text(" "+sunset); // ------------needs updating; originally was attached directly to the icon
        $("#riseset").append(riseicon,seticon)
    });
}
for(var i=0;i<constellationsAll.length;i++){
    var constname=$("<option>");    
    constname.text(constellationsAll[i])
    $("#constellation").append(constname)
  }
  
function constellationsmenu() {
    
    
    $( "#constellation" )
      .selectmenu()
      .selectmenu( "menuWidget" )
        .addClass( "overflow" );
 
    
  }
 
  constellationsmenu();