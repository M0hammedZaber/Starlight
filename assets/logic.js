// overall website logic
var object = {
  and: "Andromeda",
  ant: "Antlia",
  aps: "Apus",
  aqr: "Aquarius",
  aql: "Aquila",
  ara: "Ara",
  ari: "Aries",
  aur: "Auriga",
  boo: "Boötes",
  cae: "Caelum",
  cam: "Camelopardalis",
  cnc: "Cancer",
  cvn: "Canes Venatici",
  cma: "Canis Major",
  cmi: "Canis Minor",
  cap: "Capricornus",
  car: "Carina",
  cas: "Cassiopeia",
  cen: "Centaurus",
  cep: "Cepheus",
  cet: "Cetus",
  cha: "Chamaeleon",
  cir: "Circinus",
  col: "Columba",
  com: "Coma Berenices",
  cra: "Corona Austrina",
  crb: "Corona Borealis",
  crv: "Corvus",
  crt: "Crater",
  cru: "Crux",
  cyg: "Cygnus",
  del: "Delphinus",
  dor: "Dorado",
  dra: "Draco",
  equ: "Equuleus",
  eri: "Eridanus",
  for: "Fornax",
  gem: "Gemini",
  gru: "Grus",
  her: "Hercules",
  hor: "Horologium",
  hya: "Hydra",
  hyi: "Hydrus",
  ind: "Indus",
  lac: "Lacerta",
  leo: "Leo",
  lmi: "Leo Minor",
  lep: "Lepus",
  lib: "Libra",
  lup: "Lupus",
  lyn: "Lynx",
  lyr: "Lyra",
  men: "Mensa",
  mic: "Microscopium",
  mon: "Monoceros",
  mus: "Musca",
  nor: "Norma",
  oct: "Octans",
  oph: "Ophiuchus",
  ori: "Orion",
  pav: "Pavo",
  peg: "Pegasus",
  per: "Perseus",
  phe: "Phoenix",
  pic: "Pictor",
  psc: "Pisces",
  psa: "Piscis Austrinus",
  pup: "Puppis",
  pyx: "Pyxis",
  ret: "Reticulum",
  sge: "Sagitta",
  sgr: "Sagittarius",
  sco: "Scorpius",
  scl: "Sculptor",
  sct: "Scutum",
  ser: "Serpens Caput",
  ser: "Serpens Cauda",
  sex: "Sextans",
  tau: "Taurus",
  tel: "Telescopium",
  tri: "Triangulum",
  tra: "Triangulum Australe",
  tuc: "Tucana",
  uma: "Ursa Major",
  umi: "Ursa Minor",
  vel: "Vela",
  vir: "Virgo",
  vol: "Volans",
  Vul: "Vulpecula"
};
var constellationsAll=Object.entries(object);
//console.log(constellationsAll)
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
    constname.text(constellationsAll[i][1])
    constname.attr("data-name",constellationsAll[i][0])
    $("#constellation").append(constname)
  }
  
function constellationsmenu() {
    
    
    $( "#constellation" )
      .selectmenu()
      .selectmenu( "menuWidget" )
        .addClass( "overflow" );
 
    
  }
 
  constellationsmenu();