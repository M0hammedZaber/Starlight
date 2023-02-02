var bGeolocation = $("#getGeolocation");

var locationData = (function(){
    var location = {};

    $(bGeolocation).on('click', function(event){
        event.preventDefault();

        let getLocation = new Promise (function(resolve,reject) {
            navigator.geolocation.getCurrentPosition(function(position) {
                resolve(position.coords);
            }, function(error) {
                reject(error);
            });
            });

        getLocation.then(function(coords) {
            let lat = coords.latitude;
            let lon = coords.longitude;
            location = {lat,lon};
        }) .catch (function(error){
            console.log('upsy')
        });
});

    return {
        location: location
    };

})();

setTimeout(function(){
    console.log(locationData.location);
    }, 10000);