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