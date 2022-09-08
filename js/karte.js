//google API

function initMap() {

    //karten optionen
    var options = {
            zoom: 12,
            mapId: 'IDMAP',
            center: {
                "lat": 52.544937,
                "lng": 13.402677
            }
        }
        //neue karte
    var map = new google.maps.Map(document.getElementById('map'), options);

    //markierung
    var marker = new google.maps.Marker({
        position: {
            "lat": 52.544937,
            "lng": 13.402677
        },
        map: map
    });

    var markerRamler = new google.maps.Marker({
        position: {
            "lat": 52.547170,
            "lng": 13.392540
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



/*<script>
//google API
function initMap() {

    //karten optionen
    var options = {
            zoom: 12,
            mapId: 'IDMAP',
            center: {
                "lat": 52.544937,
                "lng": 13.402677
            }
        }
        //neue karte
    var map = new google.maps.Map(document.getElementById('map'), options);

    //markierung
    var marker = new google.maps.Marker({
        position: {
            "lat": 52.544937,
            "lng": 13.402677
        },
        map: map
    });

    var markerRamler = new google.maps.Marker({
        position: {
            "lat": 52.547170,
            "lng": 13.392540
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
</script>**/