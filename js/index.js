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