import { getCookie, FetchOrte } from "./index.js";

export default function InitButtons() {
    document.getElementById("send").addEventListener("click", (e) => {

        const coordinates = document.getElementById('output').value.split(',')
        const strasse = document.getElementById("inputStraße").value.split(' ')
        const stadt = document.getElementById("inputStadt").value
        const zip = document.getElementById("inputPLZ").value
        const text = document.getElementById("inputBemerkung").value
        const date1 = document.getElementById("date1").value
        const date2 = document.getElementById("date2").value
        const user = "ngcrocoo"
        console.log(date1)
            //const img = document.getElementById()
        const img = localStorage.getItem('globalImage')
            // console.log("XX OO XX OO:", {
            //     coord: coordinates[0] + "," + coordinates[1],
            //     strasse: strasse[0],
            //     nummer: parseInt(strasse[1]),
            //     zip: parseInt(zip),
            //     stadt: stadt,
            //     bild: img,
            //     text: text
            // })

        console.log("cookie value", getCookie("access_token"))

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
                    }) //,

                //     body: JSON.stringify({
                //     email: this.form[0].value,
                //     password: this.form[1].value,
                // }),
            })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                FetchOrte()

            })
            .catch((error) => {
                console.error('Error:', error);
            });

    });





    var backToLog = document.querySelector("#goToLogin")
    backToLog.addEventListener("click", (e) => {
        bindClick('hinzufuegen')
    });

    var btns = document.querySelector("#bottom-menu")
    var imgTags = btns.querySelectorAll("img")
    for (let i = 0; i < imgTags.length; i++) {
        console.log("111111111111111111111", imgTags[i])
        imgTags[i].addEventListener("click", (e) => {
            bindClick(e.target.dataset.id)
        });


    }
}


function bindClick(id) {
    console.log(id)
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
    // const btn = document.getElementById({buttonid})
    // btn.addEventListener("click", (e) => {

    // 
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