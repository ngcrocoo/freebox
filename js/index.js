import geoLocation from "./geolocation.js";
import initButtons from "./buttons.js";
import Tabs from "./tabs.js";
import Webcam from "./webcam.js";
import { Login } from "./login.js";

initButtons();
Tabs()
geoLocation();
Webcam();

// create a variable for the login form
const form = document.querySelector(".loginForm");
// if the form exists, run the class
if (form) {
    console.log("Form existiert");
    // setup the fields we want to validate, we only have two but you can add others
    const fields = ["username", "password"];
    // run the class
    const validator = new Login(form, fields);
}

// Get today's date for date input
document.getElementById('date1').value = new Date().toISOString().substring(0, 10);
document.getElementById('date2').value = new Date().toISOString().substring(0, 10);

// Display date
// const date1 = document.getElementById('date1').value;
// const date2 = document.getElementById('date2').value;

// const zeitraum = "Zeitraum: " + date1 + " bis " + date2;
// document.getElementById('dateOutput').value = zeitraum;


// const auth = new Auth();

// document.querySelector(".logout").addEventListener("click", (e) => {
//     auth.logOut();
// });

document.querySelector(".logout").addEventListener("click", (e) => {
    auth.logOut();
});


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


// This works on all devices/browsers, and uses IndexedDBShim as a final fallback
const indexedDB =
    window.indexedDB ||
    window.mozIndexedDB ||
    window.webkitIndexedDB ||
    window.msIndexedDB ||
    window.shimIndexedDB;

// Open (or create) the database
const request = indexedDB.open("BoxenDatabase", 1);

request.onerror = function(event) {
    console.error("An error occurred with IndexedDB");
    console.error(event);
};

// Create the schema on create and version upgrade
request.onupgradeneeded = function() {
    const db = request.result;
    const store = db.createObjectStore("boxes", { keyPath: "id" });
    store.createIndex("boxen_strasse", ["strasse"], { unique: false });
    store.createIndex("boxen_stadt", ["stadt"], { unique: false });
    store.createIndex("boxen_zip", ["zip"], { unique: false });
    store.createIndex("boxen_user", ["user"], { unique: false });
    store.createIndex("boxen_foto", ["foto"], { unique: false });

    store.createIndex("adresse", ["strasse", "stadt", "zip"], {
        unique: false,
    });
};

request.onsuccess = function() {
    console.log("Database opened successfully");

    const db = request.result;
    const transaction = db.transaction("boxes", "readwrite");

    const store = transaction.objectStore("boxes");
    const strasseIndex = store.index("boxen_strasse");
    const adresseIndex = store.index("adresse");
    const stadtIndex = store.index("boxen_stadt");
    const zipIndex = store.index("boxen_zip");


    // Add some data
    store.put({ id: 1, strasse: "Straßmannstraße 29", zip: "10249", stadt: "Berlin" });
    store.put({ id: 2, strasse: "Ramlerstr 7", zip: "13355", stadt: "Berlin" });
    store.put({ id: 3, strasse: "Reinharhtdtr 41", zip: "10117", stadt: "Berlin" });
    store.put({ id: 4, strasse: "Schlegelstr 13", zip: "10115", stadt: "Berlin" });


    // Query the data
    const idQuery = store.get(4);
    const stadtQuery = stadtIndex.getAll(["Berlin"]);
    const adresseQuery = adresseIndex.get(["Straßmannstraße 29", "Berlin", "10249"]);

    idQuery.onsuccess = function() {
        console.log("idQuery", idQuery.result);
    };

    stadtQuery.onsuccess = function() {
        console.log("stadtQuery", stadtQuery.result);
    };

    adresseQuery.onsuccess = function() {
        console.log("adresseQuery", adresseQuery.result);
    };

    const deleteBox = store.delete(1);

    deleteBox.onsuccess = function() {
        console.log("Straßmannstraße 29, 10249 Berlin wurde gelöscht'");
    };

    const stadtBerlin = stadtIndex.getKey(["Berlin"]);

    stadtBerlin.onsuccess = function() {
        const deleteBox = store.delete(stadtBerlin.result);

        deleteBox.onsuccess = function() {
            console.log("Boxen in Berlin wurden gelöscht");
        };
    };
    transaction.oncomplete = function() {
        db.close();
    };
};