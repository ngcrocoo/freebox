export default function InitButtons() {
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