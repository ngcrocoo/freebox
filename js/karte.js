//google API



function initMap(daten) {
    var orte = daten ? daten : null;
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

    var arrayModel = [{ "id": 1, "coord": "52.52277579132764,13.451707735547815", "strasse": "strassmannstrasse", "nummer": 29, "zip": 10249, "stadt": "Berlin" }, { "id": 2, "coord": "52.52197673598406,13.453970728837259", "strasse": "Matternstrasse", "nummer": 10, "zip": 10249, "stadt": "Berlin" }, { "id": 3, "coord": "52.50663906498019, 13.503347013368094", "strasse": "zachertstraße", "nummer": 14, "zip": 10315, "stadt": "Berlin" }]
    console.log("c------ondition", orte)
    if (orte) {

        for (let i = 0; i < orte.length; i++) {
            console.log(orte[i]);
            var coordString = orte[i].coord;
            var coordinates = coordString.split(',');
            var lat = Number(coordinates[0]);
            var lng = Number(coordinates[1]);

            console.log("COORS", lat, lng);

            var marker = new google.maps.Marker({
                position: {
                    "lat": lat,
                    "lng": lng
                },
                map: map,
                icon: "../img/marker.png"
            });

        }
    }

    console.log("init map")





    //infos auf nadelicon

    // var infoWindow = new google.maps.InfoWindow({
    //     content: '<h4>Überschrift</h4><ul><li><strong>Straße:</strong> Musterstr. 1</li><li><strong>Inhalt:</strong> LoremIpsum</li><li><strong>Bild:</strong><img src="https://corporatedesign.htw-berlin.de/files/Presse/_tmp_/3/4/csm_Logos_1330x430_612fe2f37a.jpg" /></a></p'
    // })

    // marker.addListener('click', function() {
    //     infoWindow.open(map, marker);
    // });

}

//initMap()