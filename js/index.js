//import bulmaCalendar from '../node_modules/bulma-calendar/dist/js/bulma-calendar.min.js';
const calendar = require('../node_modules/bulma-calendar/dist/js/bulma-calendar.min.js')
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

function suche() {
    console.log("Funktioniert")

    var suche = document.getElementById("suche") ? document.getElementById("suche") : null;
    var hinzufuegen = document.getElementById("hinzufuegen") ? document.getElementById("hinzufuegen") : null;
    var benutzer = document.getElementById("meinAccount") ? document.getElementById("meinAccount") : null;

    console.log(suche)
    if (suche) {
        if (suche.classList.contains("inactive")) {
            console.log("in suche click condition")
            suche.classList.toggle("inactive");
        } else {
            suche.classList.toggle("inactive");
        }
    }
}

function hinzufuegen() {
    console.log("Funktioniert")

    var hinzufuegen = document.getElementById("hinzufuegen") ? document.getElementById("hinzufuegen") : null;
    var suche = document.getElementById("suche") ? document.getElementById("suche") : null;
    var benutzer = document.getElementById("meinAccount") ? document.getElementById("meinAccount") : null;

    console.log(hinzufuegen)
    if (hinzufuegen) {
        if (hinzufuegen.classList.contains("inactive")) {
            console.log("in hinzufuegen click condition")
            hinzufuegen.classList.toggle("inactive");
        } else {
            hinzufuegen.classList.toggle("inactive");
        }
    }
}

function meinAccount() {
    console.log("Funktioniert")

    var hinzufuegen = document.getElementById("hinzufuegen") ? document.getElementById("suche") : null;
    var suche = document.getElementById("suche") ? document.getElementById("suche") : null;
    var benutzer = document.getElementById("meinAccount") ? document.getElementById("meinAccount") : null;

    console.log(benutzer)
    if (benutzer) {
        if (benutzer.classList.contains("inactive")) {
            console.log("in benutzer click condition")
            benutzer.classList.toggle("inactive");
        } else {
            benutzer.classList.toggle("inactive");
        }
    }
}

function kategorien() {
    console.log("Funktioneirt")

    var kategorien = document.getElementById("kategorien") ? document.getElementById("kategorien") : null;
    if (kategorien) {
        if (kategorien.classList.contains("inactive")) {
            console.log("Click kategorien funktioneirt")
            kategorien.classList.toggle("inactive");
        } else {
            kategorien.classList.toggle("inactive");
        }
    }

}

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

function Tabs() {
    console.log("1 2 3 funktioniert")
    var bindAll = function() {
        var menuElements = document.querySelectorAll('[data-tab]');
        for (var i = 0; i < menuElements.length; i++) {

            menuElements[i].addEventListener('click', change, false);
            console.log(menuElements[i])
        }
    }

    var clear = function() {
        console.log("clear")
        var menuElements = document.querySelectorAll('[data-tab]');
        console.log(menuElements)
        for (var i = 0; i < menuElements.length; i++) {
            menuElements[i].classList.remove('active');
            var id = menuElements[i].getAttribute('data-tab');
            document.getElementById(id).classList.remove('active');
            console.log(menuElements[i])
        }
    }

    var change = function(e) {
        console.log("change")
        clear();
        e.target.classList.add('active');
        var id = e.currentTarget.getAttribute('data-tab');
        document.getElementById(id).classList.add('active');
    }

    bindAll();
}

var connectTabs = new Tabs();

Tabs()



// Initialize all input of type date
var calendars = bulmaCalendar.attach('[type="date"]', options);

// Loop on each calendar initialized
for (var i = 0; i < calendars.length; i++) {
    // Add listener to select event
    calendars[i].on('select', date => {
        console.log(date);
    });
}

// To access to bulmaCalendar instance of an element
var element = document.querySelector('#my-element');
if (element) {
    // bulmaCalendar instance is available as element.bulmaCalendar
    element.bulmaCalendar.on('select', function(datepicker) {
        console.log(datepicker.data.value());
    });
}





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