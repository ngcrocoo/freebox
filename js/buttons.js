import { getCookie, FetchOrte, showMyBox } from "./index.js";
import {fetchCoordinates} from "./geolocation.js"

export default function InitButtons() { 
     
//formular für adresse, weiterleitung an backend, API CALL

    document.getElementById("send").addEventListener("click", (e) => {
        const strasse = document.getElementById("inputStraße").value.split(' ')
        const stadt = document.getElementById("inputStadt").value
        const zip = document.getElementById("inputPLZ").value

        // document.getElementById('output')=`${data.results[0].geometry.location.lat},${}`
       fetchCoordinates(strasse[0]+" "+  strasse[1] +" " + zip + " "+ stadt)
     
        const coordinates = localStorage.getItem('coords').split(',')

        const text = document.getElementById("inputBemerkung").value
        const date1 = document.getElementById("date1").value
        const date2 = document.getElementById("date2").value
        const user = "ngcrocoo"

        const img = localStorage.getItem('globalImage')

        fetch('https://freebox.live:8888/api/standorte/', {
                method: 'POST', // or 'PUT'
                headers: {
                    "Authorization": `Bearer ${getCookie("access_token")}`

                },
                mode: 'cors',

                body: JSON.stringify({
                        coord: coordinates[0] + "," + coordinates[1],
                        strasse: strasse[0],
                        nummer: parseInt(strasse[1]),
                        zip: parseInt(zip),
                        stadt: stadt,
                        bild: img,
                        text: text
                    }) 

 
            })
            .then((response) => response.json())
            .then((data) => {
                FetchOrte()
                location.reload();

            })
            .catch((error) => {
            });

    });



//hinzufügen einer box wird geöffnet

    var backToLog = document.querySelector("#goToLogin")  //wenn nicht eingeloggt, weiterleitung zu log in
    backToLog.addEventListener("click", (e) => {
        bindClick('hinzufuegen')
    });

    var btns = document.querySelector("#bottom-menu")
    var imgTags = btns.querySelectorAll("img")
    for (let i = 0; i < imgTags.length; i++) {
        imgTags[i].addEventListener("click", (e) => {
            bindClick(e.target.dataset.id)
        });


    }
}

// öffnet den angeklickenbereich
function bindClick(id) {
    const pages = document.querySelectorAll('[data-page]');
    pages.forEach(element => {

        if (element.id === id && element.classList.contains("inactive")) {
            element.classList.toggle("inactive");
        } else if (!element.classList.contains("inactive")) {
            element.classList.toggle("inactive");
        }
    });
}

export function toggleContent(state) {

    //login=true, nicht eingeloggt=false) im weiteren verlauf-> blendet login funktion ein, wenn nciht eingeloggt oder die logoutfuktion wenn bereits eingeloggt (
    const myLogin = document.getElementById("AccLogin")
    const myLogout = document.getElementById("logout")
    const logRegis = document.getElementById('logorregister')
    const content = document.getElementById('seiten')
    if (state) {
        logRegis.classList.add("inactive")
        content.classList.remove("inactive")
        myLogout.classList.remove("inactive")
        myLogin.classList.add("inactive")
    } else {
        content.classList.add("inactive")
        logRegis.classList.remove("inactive")
        myLogout.classList.add("inactive")
        myLogin.classList.remove("inactive")
    }
}