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
        console.log("XX OO XX OO:", {
            coord: coordinates[0] + "," + coordinates[1],
            strasse: strasse[0],
            nummer: parseInt(strasse[1]),
            zip: parseInt(zip),
            stadt: stadt,
            bild: img,
            text: text
        })

        if (document.cookie) {

        }

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


    var btns = document.querySelector("#bottom-menu")
    var imgTags = btns.querySelectorAll("img")
    console.log(btns)
    for (let i = 0; i < imgTags.length; i++) {
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