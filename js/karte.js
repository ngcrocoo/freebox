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


    if (orte) {

        for (let i = 0; i < orte.data.length; i++) {
            console.log("HHHHHHHHHHH", orte.data[i]);
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

            var content = `<div>
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


            console.log("COORS", lat, lng);

            var marker = new google.maps.Marker({
                position: {
                    "lat": lat,
                    "lng": lng
                },
                map: map,
                icon: "../img/marker.png"
            });
            attachSecretMessage(marker, content);
        }


        function attachSecretMessage(marker, secretMessage) {
            const infowindow = new google.maps.InfoWindow({
                content: secretMessage,
            });

            marker.addListener("click", () => {
                infowindow.open(marker.get("map"), marker);
            });
        }






    } //initMap()

}