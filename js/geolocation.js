  //HIER KOMMT ALLES ZUR GEOLOCATION REIN

  //standortabfrage
  export default function LocationButton() {

      document.getElementById('location-button').addEventListener("click", function() {
          if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(function(position) {
                  fetchAdress(position.coords.latitude, position.coords.longitude)
                  localStorage.setItem('coords', `${ position.coords.latitude},${       position.coords.longitude}`);
                  document.getElementById('output').value = position.coords.latitude + "," + position.coords.longitude;
              });
          } else {
              console.log("Geolocation wird nicht unterstuetzt");
          }
      });

  }

  //abfangen der koordinaten und umwandlung in adresse

  function fetchAdress(lat, lng) {
          //long, lat in adresse
      const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyCOQ7qub2XGd5keyY4GdqRGvc-8mSYoyMo`
      fetch(url)
          .then((response) => response.json())
          .then((data) =>
              injectAdress(data.results[0]))
          .catch();
  }

  export function fetchCoordinates(adresse){
   
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${adresse}&key=AIzaSyCOQ7qub2XGd5keyY4GdqRGvc-8mSYoyMo`
         
    fetch(url)
    .then((response) => response.json())
    .then((data) => {                 
        localStorage.setItem('coords', `${ data.results[0].geometry.location.lat},${       data.results[0].geometry.location.lng}`);
       
    })       
       
  }

//eintragen der adresse in formular wenn auf standortabfrage geklickt wurde

  function injectAdress(addObj) {
      const googleObject = {
          "strasse": addObj.address_components[0] ? addObj.address_components[1].long_name : "strasse",
          "nummer": addObj.address_components[0] ? addObj.address_components[0].long_name : 123,
          "stadt": addObj.address_components[0] ? addObj.address_components[3].long_name : "stadt",
          "zip": addObj.address_components[0] ? addObj.address_components[7].long_name : 123
      }

      document.getElementById("inputStraße").value = `${googleObject.strasse} ${googleObject.nummer}`;
      document.getElementById("inputStadt").value = `${googleObject.stadt}`;
      document.getElementById("inputPLZ").value = `${googleObject.zip}`;

  }
