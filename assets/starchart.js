//star chart API logic


  
  var lat=35.85960;
  var lon=-3.90285;
  var constellation = "scl";
  var todayDate = moment().format("YYYY-MM-DD");
  let starChart = function(lat,lon,constellation) {
    const apiKey = "0fdf0d68-0665-44ad-a0eb-fbae27695b7b";
    const apiSecret = "0d369322290adb6f9b1d5f66d50e7fd88b7d59b2c118bbe16bc306bfa271355b55791d07ebecb2b388535d1ec66f6742da727359d0fb532f68a9db7245f992049915c8dddab459a573dd4f00767a7a831f5530f92da55d6d8b5dcaace8609d038dc9cb596513397f2970ae9eee1477dc";
  
    const hash = btoa(`${apiKey}:${apiSecret}`);
  
    var body = JSON.stringify( {
      "style": "red",
      "observer": {
          "latitude": lat,
          "longitude": lon,
          "date": todayDate
      },
      "view": {
        "type": "constellation",
        "parameters": {
            "constellation": constellation 
        }
    }});
  
        const queryURLAstr = "https://api.astronomyapi.com/api/v2/studio/star-chart";
        console.log(queryURLAstr);
        fetch(queryURLAstr,
          {method: "POST",
          headers: {'Authorization': `Bearer ${hash}`},
          body: body
        }).then(function(response){
          return response.text();
        }).then(function (result) {
          var resultAPI = JSON.stringify(result);
          resultAPI1=resultAPI.slice(27,-5);
          console.log(resultAPI1);
          //$("#star-chart").attr('src',"");
          $("#star-chart").attr('src',resultAPI1);
          });
  
  }
  
  
  

