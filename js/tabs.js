export default function Tabs() {
    console.log("1 2 3 4 funktioniert")

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

export function UploadForm(strasse, stadt, zip, text, foto) {

    console.log("straße:", strasse)
    console.log("stadt:", stadt)
    console.log("zip:", zip)
    console.log("text:", text)
        // console.log("upload btn: ", foto)
}


var connectTabs = new Tabs();

Tabs()