//HIER KOMMT ALLES ZUR GEOLOCATION REIN

//GEOLOCATION

//standortabfrage

document.getElementById('location-button').addEventListener("click", function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log(position.coords.latitude);
            console.log(position.coords.longitude);
            console.log(typeof position.coords.longitude)
        });
    } else {
        console.log("Geolocation wird nicht unterstuetzt");
    }
});




//long, lat in adresse
const url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyCOQ7qub2XGd5keyY4GdqRGvc-8mSYoyMo"
fetch(url).then(function(response) {
    console.log("eins");
    return response.json();
}).then(function(data) {
    console.log("zwei");
    console.log(data);
}).catch(function() {
    console.log("Booo");
});


//google KARTENAPI
function initMap() {

    //karten optionen
    var options = {
            zoom: 12,
            mapId: 'IDMAP',
            center: {
                lat: 52.544937,
                lng: 13.402677
            }
        }
        //neue karte
    var map = new google.maps.Map(document.getElementById('map'), options);

    //markierung
    var marker = new google.maps.Marker({
        position: {
            lat: 52.544937,
            lng: 13.402677
        },
        map: map
    });

    var markerRamler = new google.maps.Marker({
        position: {
            lat: 52.547170,
            lng: 13.392540
        },
        map: map
            //icon:'http://cdn.onlinewebfonts.com/svg/img_462308.png'
    });

    //infos auf nadelicon

    var infoWindow = new google.maps.InfoWindow({
        content: '<h1>Mauerpark</h1>'
    })

    marker.addListener('click', function() {
        infoWindow.open(map, marker);
    });


}


src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCCMDKGk7nFrYA4h6Cci0OavpfBHXE0iGg&callback=initMap";

src = "js/index.js";