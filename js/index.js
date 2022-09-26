import geoLocation from "./geolocation.js";
import initButtons from "./buttons.js";
import { toggleContent } from "./buttons.js";
import Tabs from "./tabs.js";
import Webcam from "./webcam.js";
import { Login } from "./login.js";
import { Register } from "./register.js";


//Aufruf der Funktionen beim laden der seite
initButtons();
Tabs()
geoLocation();
FetchOrte()
Webcam();
getUserInfo()

const registerInst = document.querySelector('#register')
const log = document.querySelector('#log')
const logout = document.querySelector('#logout')
const myBoxes = []

registerInst.addEventListener("click", function() {
    hideLogin()
});

log.addEventListener("click", function() {
    hideRgister()
});

logout.addEventListener("click", function() {
    Logout()
});

export function hideLogin() {
    document.getElementById('logIn').classList.remove('active')
    document.getElementById('logIn').classList.add('inactive')
    document.getElementById('registration').classList.remove('inactive')
    document.getElementById('registration').classList.add('active')
}

export function hideRgister() {
    document.getElementById('logIn').classList.remove('inactive')
    document.getElementById('logIn').classList.add('active')
    document.getElementById('registration').classList.remove('active')
    document.getElementById('registration').classList.add('inactive')
}

var globalImageData = null;

export default function createCookie(value) {
    var now = new Date();
    now.setTime(now.getTime() + (26 * 3600 * 1000));
    document.cookie = value + "; expires=" + now.toUTCString() + "; path=/"
}

export function getCookie(name) {
    let value = '; ' + document.cookie;
    let parts = value.split(`; ${name}=`);
    if (parts.length == 2) return parts.pop().split(';').shift();
}

export function deleteCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
}

// AUSLOGGEN FUNKTION: COOKIE LÖSCHEN?

export function getUserInfo() {
    if (getCookie("access_token")) {
        fetch('https://freebox.live:8888/api/users/me', {
            headers: {
                "Authorization": `Bearer ${getCookie("access_token")}`
            },
            mode: 'cors',
            referrer: 'no-referrer'
        }).then(function(response) {
            return response.json();

        }).then(function(data) {
            var userData = data.data
            createCookie(`user-email=${userData.user.email}`)
            createCookie(`user-id=${userData.user.id}`)
            toggleContent(true)

        }).catch(function(err) {


        });
    } else {
        toggleContent(false) // Login/ Registrierung einblenden + User Übersicht ausblenden
    }

}

export function LoginCall(username, password) {

    fetch('https://freebox.live:8888/api/auth/login', {
            method: "POST",
            mode: 'cors',

            body: JSON.stringify({
                email: username,
                password: password,
            }),
        })
        .then((response) => response.json())
        .then((data) => {

            // code here //
            if (data.error) {
                alert("Error Password or Username"); /*displays error message*/
            } else {
                console.log(data.access_token)
                createCookie(`access_token=${data.access_token}`)
                getUserInfo()
                FetchOrte()

            }
        })
        .catch((err) => {
            console.log(err);

        });
}

export function Logout() {
    if (getCookie("access_token")) {
        fetch('https://freebox.live:8888/api/auth/logout', {
            headers: {
                "Authorization": `Bearer ${getCookie("access_token")}`
            },
            mode: 'cors',
            referrer: 'no-referrer'
        }).then(function(response) {
            return response.json();

        }).then(function(data) {
            deleteCookie("access_token")
            deleteCookie("user-email")
            deleteCookie("user-id")
            location.reload();

        }).catch(function(err) {

        });
    } else {
        // Login/ Registrierung einblenden + User Übersicht ausblenden
    }

}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }

export function FetchOrte() {
    fetch('https://freebox.live:8888/api/standorte-noauth/', {

        referrer: 'no-referrer'
    }).then(function(response) {

        // The API call was successful!

        return response.json();

        // There was an error

    }).then(function(data) {

        initMap(data)
        for (let i = 0; i < data.data.length; i++) {
            if (getCookie("access_token")) {
                if (identifyMyBoxes(data.data[i].user)) {
                    myBoxes.push(data.data[i])
                    showMyBox(data.data[i].id, data.data[i].bild, data.data[i].strasse, data.data[i].nummer)
                }
            }
        }
        document.getElementById('boxElement').classList.add('inactive')

    }).catch(function(err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });
}

function deleteBoxCall (id){

    fetch(`https://freebox.live:8888/api/standorte/${id}`, {
        method: 'DELETE', // or 'PUT'
        headers: {
            "Authorization": `Bearer ${getCookie("access_token")}`

        },
        mode: 'cors',    
    })
    .then(function(response) {

        // The API call was successful!
        location.reload();
            FetchOrte()
        
        // There was an error


    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

function identifyMyBoxes(user) {

    if (getCookie("user-id") === user) {
        return true
    } else {
        return false
    }
}
var number = 0

export function showMyBox(id, bild, strasse, nummer) {
 
     var boxDom= `  <div class="column is-6-mobile is-6-tablet is-4-desktop is-3-widescreen is-2-fullhd" id="${id}">
                        <div class="card">
                            <div class="card-image">
                                <figure class="image is-4by3">
                                    <img src="data:image/png;base64, ${bild}" alt="Placeholder image">
                                </figure>
                            </div>
                            <div class="card-content">                         
                            <p class="subtitle is-size-6">
                              ${strasse + " " + nummer}
                            </p>
                            </div>
                            <footer class="card-footer">
                            
                                <p class="card-footer-item">
                                    <span class="icon trash boxElemIcon" data-boxid="${id}">
                                        <i class="fa-solid fa-trash deleteBox"></i>
                                        <i class="inactive boxID"></i>
                                    </span>
                                </p>
                          </footer>
                        </div>                                   
                    </div>`
  
    var boxList = document.getElementById("myBoxList")
    boxList.innerHTML = boxList.innerHTML + boxDom

    var boxElement = document.getElementById(id)
    boxElement.querySelector(`[data-boxid="${id}"]`).addEventListener("click", (e) => {
        deleteBoxCall(id)
    })
    
}

// Get today's date for date input
document.getElementById('date1').value = new Date().toISOString().substring(0, 10);
document.getElementById('date2').value = new Date().toISOString().substring(0, 10);

// create a variable for the login form
const formLogin = document.querySelector(".loginForm");
// if the form exists, run the class
if (formLogin) {
        // setup the fields we want to validate, we only have two but you can add others
    const fieldsLogin = ["email", "password"];
    // run the class
    const validatorLogin = new Login(formLogin, fieldsLogin);
}

const formRegister = document.querySelector(".registerForm");
if (formRegister) {
    const fieldsRegister = ["email", "password"];
    const validatorRegister = new Register(formRegister, fieldsRegister);
}

// This works on all devices/browsers, and uses IndexedDBShim as a final fallback
const indexedDB =
    window.indexedDB ||
    window.mozIndexedDB ||
    window.webkitIndexedDB ||
    window.msIndexedDB ||
    window.shimIndexedDB;

// Open (or create) the database
const request = indexedDB.open("BoxenDatabase", 1);

request.onerror = function(event) {
    console.error("An error occurred with IndexedDB");
    console.error(event);
};

// Create the schema on create and version upgrade
request.onupgradeneeded = function() {
    const db = request.result;
    const store = db.createObjectStore("boxes", { keyPath: "id" });
    store.createIndex("boxen_strasse", ["strasse"], { unique: false });
    store.createIndex("boxen_stadt", ["stadt"], { unique: false });
    store.createIndex("boxen_zip", ["zip"], { unique: false });
    store.createIndex("boxen_user", ["user"], { unique: false });
    store.createIndex("boxen_foto", ["foto"], { unique: false });

    store.createIndex("adresse", ["strasse", "stadt", "zip"], {
        unique: false,
    });
};

request.onsuccess = function() {

    const db = request.result;
    const transaction = db.transaction("boxes", "readwrite");

    const store = transaction.objectStore("boxes");
    const strasseIndex = store.index("boxen_strasse");
    const adresseIndex = store.index("adresse");
    const stadtIndex = store.index("boxen_stadt");
    const zipIndex = store.index("boxen_zip");

    // Unsere Daten der Boxen
    store.put({ id: 1, strasse: "Straßmannstraße 29", zip: "10249", stadt: "Berlin" });
    store.put({ id: 2, strasse: "Ramlerstr 7", zip: "13355", stadt: "Berlin" });
    store.put({ id: 3, strasse: "Reinharhtdtr 41", zip: "10117", stadt: "Berlin" });
    store.put({ id: 4, strasse: "Schlegelstr 13", zip: "10115", stadt: "Berlin" });


    // Query the data
    const idQuery = store.get(4);
    const stadtQuery = stadtIndex.getAll(["Berlin"]);
    const adresseQuery = adresseIndex.get(["Straßmannstraße 29", "Berlin", "10249"]);

    idQuery.onsuccess = function() {
    };

    stadtQuery.onsuccess = function() {
    };

    adresseQuery.onsuccess = function() {
    };

    const deleteBox = store.delete(1);

    deleteBox.onsuccess = function() {
    };

    const stadtBerlin = stadtIndex.getKey(["Berlin"]);

    stadtBerlin.onsuccess = function() {
        const deleteBox = store.delete(stadtBerlin.result);

        deleteBox.onsuccess = function() {
        };
    };
    transaction.oncomplete = function() {
        db.close();
    };
};