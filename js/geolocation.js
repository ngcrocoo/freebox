  //HIER KOMMT ALLES ZUR GEOLOCATION REIN

  //standortabfrage
  export default function LocationButton() {

      document.getElementById('location-button').addEventListener("click", function() {
          //console.log("HURRA")
          if (navigator.geolocation) {
            //  console.log("in schleife")
              navigator.geolocation.getCurrentPosition(function(position) {
             //     console.log("-- getting coordinates")
                  fetchAdress(position.coords.latitude, position.coords.longitude)
              //    console.log("Kooridinaten:", position.coords.latitude, position.coords.longitude)
                  document.getElementById('output').value = position.coords.latitude + "," + position.coords.longitude;
               //   console.log("Value:", document.getElementById('output').value)

              });
          } else {
              console.log("Geolocation wird nicht unterstuetzt");
          }
      });

  }

  //abfangen der koordinaten und umwandlung in adresse

  function fetchAdress(lat, lng) {
     // console.log("-- translate coordinates: " + lat + "," + lng)
          //long, lat in adresse
      const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyCOQ7qub2XGd5keyY4GdqRGvc-8mSYoyMo`
      fetch(url)
          .then((response) => response.json())
          .then((data) =>
              injectAdress(data.results[0]))
          .catch();
  }

  function injectAdress(addObj) {
    //  console.log("fetched obj", addObj)
      const googleObject = {
          "strasse": addObj.address_components[0] ? addObj.address_components[1].long_name : "strasse",
          "nummer": addObj.address_components[0] ? addObj.address_components[0].long_name : 123,
          "stadt": addObj.address_components[0] ? addObj.address_components[3].long_name : "stadt",
          "zip": addObj.address_components[0] ? addObj.address_components[7].long_name : 123
      }
 //     console.log("new obj", googleObject)

      document.getElementById("inputStraße").value = `${googleObject.strasse} ${googleObject.nummer}`;
      document.getElementById("inputStadt").value = `${googleObject.stadt}`;
      document.getElementById("inputPLZ").value = `${googleObject.zip}`;

      nadelAufKarte();
  }


  function nadelAufKarte(lat, lng) {



  }


  // ADRESSE ZU GEOKOORDINATEN https://ourcodeworld.com/articles/read/1387/how-to-convert-a-text-address-into-geographic-coordinates-using-googles-geocoding-api


  //GEOLOCATION

  //standortabfrage
  /*
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
  **/