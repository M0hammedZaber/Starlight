//star chart API logic

var constellationsAll = {
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

var lat=35.85960;
var lon=-3.90285;
var constellation = $("#constellation");
var todayDate = moment().format("YYYY-MM-DD");
console.log(todayDate);
console.log(lat);


const apiKey = "0fdf0d68-0665-44ad-a0eb-fbae27695b7b";
const apiSecret = "0d369322290adb6f9b1d5f66d50e7fd88b7d59b2c118bbe16bc306bfa271355b55791d07ebecb2b388535d1ec66f6742da727359d0fb532f68a9db7245f992049915c8dddab459a573dd4f00767a7a831f5530f92da55d6d8b5dcaace8609d038dc9cb596513397f2970ae9eee1477dc";

const hash = CryptoJS.HmacSHA256(`${apiKey}:${apiSecret}`, apiSecret).toString(CryptoJS.enc.Hex);

console.log(hash);

$(constellation).on("click", function(lat,lon) {
    queryURLAstr = "https://api.astronomyapi.com/v/v2/chart?object="+constellation+"&latitude="+lat+"&longitude="+lon+"&start="+todayDate+"&end="+todayDate+"&interval=60"
    $.ajax({
        url: queryURLAstr,
        method: "GET",
      }).then(function(response) {
        console.log(response);
});
});

