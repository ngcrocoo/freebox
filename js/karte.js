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
        console.log("-----in condition", orte)
        for (let i = 0; i < orte.data.length; i++) {
            console.log(orte[i]);
            var coordString = orte.data[i].coord;
            var strasseString = `${orte.data[i].strasse + " " + orte.data[i].nummer}`
            var zipString = `${orte.data[i].zip}`
            var stadtString = `${orte.data[i].stadt}`
            var textString = `${orte.data[i].text}`
            var textBild = `${orte.data[i].bild}`
            console.log("coors", coordString)
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


            //infos auf nadelicon
            console.log("########## create info window")

            var infoWindow = new google.maps.InfoWindow({
                content: `<div>
                            <ul>
                                <li>
                                    <strong>Adresse:</strong>
                                        <p>
                                            ${strasseString}<br />
                                            ${zipString} ${stadtString}
                                        </p>
                                </li>
                                <li>
                                    <strong>Inhalt:</strong>
                                        <p>
                                            ${textString}
                                        </p>
                                </li>
                            </ul>
                            <img src="data:image/png;base64, ${textBild}" />
                        </div>`

            })

            console.log("xxxxxxxxxxx create marker info window event")
            marker.addListener('click', function() {
                infoWindow.open(map, marker);
            });

        }

    } //initMap()

}