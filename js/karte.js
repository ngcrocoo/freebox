//google API

function initMap() {

    //karten optionen
    var options = {
            zoom: 12,
            mapId: 'IDMAP',
            center: {
                "lat": 52.544937,
                "lng": 13.402677
            },
            disableDefaultUI: true,
        }
        //neue karte
    var map = new google.maps.Map(document.getElementById('map'), options);

 
 /** */
 
    //markierung
    var markerTest = new google.maps.Marker({
        position: {
            "lat": 52.544937,
            "lng": 13.402677
        },
        map: map,
        icon: "../img/marker.png"
    });

    var markerRamler = new google.maps.Marker({
        position: {
            "lat": 52.547170,
            "lng": 13.392540
        },
        map: map,
        icon: "../img/marker.png"
            //icon:'http://cdn.onlinewebfonts.com/svg/img_462308.png'
    });

    //infos auf nadelicon

    var infoWindow = new google.maps.InfoWindow({
        content: '<h4>Überschrift</h4><ul><li><strong>Straße:</strong> Musterstr. 1</li><li><strong>Inhalt:</strong> LoremIpsum</li><li><strong>Bild:</strong><img src="https://corporatedesign.htw-berlin.de/files/Presse/_tmp_/3/4/csm_Logos_1330x430_612fe2f37a.jpg" /></a></p'
    })

    markerTest.addListener('click', function() {
        infoWindow.open(map, markerTest);
    });



    var markerStraffmann = new google.maps.Marker({
        position: {
            "lat": 52.5227469,
            "lng": 13.4518563
        },
        map: map
        
    });

    markerStraffmann.addListener('click', function() {
        infoWindow.open(map, markerStraffmann);
    });

}

//initMap()