import geoLocation from "./geolocation.js";
import initButtons from "./buttons.js";
import Tabs from "./tabs.js";
initButtons();
Tabs()
geoLocation();

// function suche() {
//     console.log("Funktioniert")

//     var suche = document.getElementById("suche");
//     var hinzufuegen = document.getElementById("hinzufuegen");
//     var benutzer = document.getElementById("meinAccount");

//     if (this.style.display === "none") {
//             this.style.display = "block";
//         } else {
//             this.style.display = "none";
//         }

//         else if (this == hinzufuegen) {
//         if (this.style.display === "none") {
//             this.style.display = "block";
//         } else {
//             this.style.display = "none";
//         }
//     } else {
//         if (this.style.display === "none") {
//             this.style.display = "block";
//         } else {
//             this.style.display = "none";
//         } 
//     }


// }



// function datenEintragung() {
//     console.log("Daten eintragen funktioniert")

//     var seite1 = document.getElementById("seite1") ? document.getElementById("seite1") : null;
//     var seite2 = document.getElementById("seite2") ? document.getElementById("seite2") : null;
//     var seite3 = document.getElementById("seite3") ? document.getElementById("seite3") : null;

//     var btnNext = document.getElementById("nextBtn");
//     var btnBack = document.getElementById("backBtn");


//     if (btnNext.onclick) {
//         if (seite1.style.display = "block") {
//             seite1.style.display = "none"
//             seite2.style.display = "block"
//             seite3.style.display = "none";
//         } else if (seite2.style.display = "block") {
//             seite1.style.display = "none"
//             seite2.style.display = "none"
//             seite3.style.display = "block";
//         } else if (seite3.display = "block") {

//         }

//     }

// }









// function hinzufuegen() {
//     console.log("Funktioniert")

//     var suche = document.getElementById("suche");
//     var hinzufuegen = document.getElementById("hinzufuegen");
//     var benutzer = document.getElementById("meinAccount");

//     if (hinzufuegen.style.display === "none") {
//         hinzufuegen.style.display = "block";
//         suche.style.display = "none";
//         benutzer.style.display = "none";
//     } else {
//         hinzufuegen.style.display = "none";
//     }
// }

// function meinAccount() {
//     console.log("Funktioniert")

//     var suche = document.getElementById("suche");
//     var hinzufuegen = document.getElementById("hinzufuegen");
//     var benutzer = document.getElementById("meinAccount");

//     if (benutzer.style.display === "none") {
//         benutzer.style.display = "block";
//         hinzufuegen.style.display = "none";
//         suche.style.display = "none";
//     } else {
//         benutzer.style.display = "none";
//     }
// }

/**
<html>
<head>
<script src="jquery-2.1.4.js"></script>

</head>
<body>
<div id="navbar"><span>Red Stapler - Geolocation API</span></div>
<div id="wrapper">
  <button id="location-button">Get User Location</button>
  <div id="output"></div>
</div>

<script>
        $('#location-button').click(function(){
      
          if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(function(position){
                console.log(position);
                $.get( "http://maps.googleapis.com/maps/api/geocode/json?latlng="+ position.coords.latitude + "," + position.coords.longitude +"&sensor=false", function(data) {
                  console.log(data);
                })
                var img = new Image();
                img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + position.coords.latitude + "," + position.coords.longitude + "&zoom=13&size=800x400&sensor=false";
                $('#output').html(img);
              });
              
          }

        });
</script>
</body>
</html> 
**/