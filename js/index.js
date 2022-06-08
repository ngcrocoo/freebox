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

    var suchen = document.getElementById("suche");
    var hinzufuegen = document.getElementById("hinzufuegen");
    var benutzer = document.getElementById("meinAccount");

    if (suchen.style.display === "none") {
        suchen.style.display = "block";
        hinzufuegen.style.display = "none";
        benutzer.style.display = "none";
    } else {
        suchen.style.display = "none";
    }

}

function hinzufuegen() {
    console.log("Funktioniert")

    var suchen = document.getElementById("suche");
    var hinzufuegen = document.getElementById("hinzufuegen");
    var benutzer = document.getElementById("meinAccount");

    if (hinzufuegen.style.display === "none") {
        hinzufuegen.style.display = "block";
        suchen.style.display = "none";
        benutzer.style.display = "none";
    } else {
        hinzufuegen.style.display = "none";
    }
}

function meinAccount() {
    console.log("Funktioniert")

    var suchen = document.getElementById("suche");
    var hinzufuegen = document.getElementById("hinzufuegen");
    var benutzer = document.getElementById("meinAccount");

    if (benutzer.style.display === "none") {
        benutzer.style.display = "block";
        hinzufuegen.style.display = "none";
        suchen.style.display = "none";
    } else {
        benutzer.style.display = "none";
    }
}