export default function InitButtons() {
    document.getElementById("send").addEventListener("click", (e) => {

        const strasse = document.getElementById("inputStraße").value
        const stadt = document.getElementById("inputStadt").value
        const zip = document.getElementById("inputPLZ").value
        const text = document.getElementById("inputBemerkung").value

        const postData = {
            // "coord":
        }

        fetch('https://freebox.live:8888/standort', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
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