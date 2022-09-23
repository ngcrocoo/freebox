import geoLocation from "./geolocation.js";
import initButtons from "./buttons.js";
import { toggleContent } from "./buttons.js";
//import Register from "./register.js";
import Tabs from "./tabs.js";
import Webcam from "./webcam.js";
import { Login } from "./login.js";
import { Register } from "./register.js";

initButtons();
Tabs()
geoLocation();
FetchOrte()
Webcam();
getUserInfo()




const registerInst = document.querySelector('#register')
const log = document.querySelector('#log')
const logout = document.querySelector('#logout')

registerInst.addEventListener("click", function() {
    hideLogin()
});

log.addEventListener("click", function() {
    hideRgister()
});

logout.addEventListener("click", function() {
    console.log("Logout Eventlistener -------------------")
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

// function hideLoginRegister() {

//     const logRegister = document.getElementsByClassName("logorregister")
//     console.log(logRegister)
//         // .classList.remove('active');
//     for (let i = 0; i < logRegister.length; i++) {
//         logRegister[i].classList.remove('active')
//         logRegister[i].classList.add('inactive')
//     }
//     console.log(logRegister)
//     document.getElementById('seiten').classList.remove('inactive')
//     document.getElementById('seiten').classList.add('active')
//     document.getElementById('AccLogin').classList.add('inactive')


//     // document.getElementsByClassName("seiten").classList.remove('inactive');
//     // document.getElementsByClassName("logorregister").classList.add('inactive');
//     // document.getElementsByClassName("seiten").classList.add('active');
//     console.log("Login verstecken klappt");
// }

// function showLoginRegister() {
//     const logRegister = document.getElementsByClassName("logorregister")

//     for (let i = 0; i < logRegister.length; i++) {
//         logRegister[i].classList.remove('inactive')
//         logRegister[i].classList.add('active')
//     }
//     console.log(logRegister)
//     document.getElementById('seiten').classList.remove('inactive')
//     document.getElementById('seiten').classList.add('active')
// }


var globalImageData = null;

export default function createCookie(value) {
    var now = new Date();
    now.setTime(now.getTime() + (26 * 3600 * 1000));
    document.cookie = value + "; expires=" + now.toUTCString() + "; path=/"
}

export function getCookie(name) {
    let value = '; ' + document.cookie;
    // console.log("-----------------VALUE", value)
    let parts = value.split(`; ${name}=`);
    if (parts.length == 2) return parts.pop().split(';').shift();
    console.log("-----------------VALUE", parts.pop().split(';').shift())
}

export function deleteCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
}

// AUSLOGGEN FUNKTION: COOKIE LÖSCHEN?
// 

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
                // Login/ Registrierung ausblenden + User Übersicht einblenden
        //    console.log("FETCH USER INFO", data.data);

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
            console.log(data);
            // code here //
            if (data.error) {
                alert("Error Password or Username"); /*displays error message*/
            } else {
                console.log(data.access_token)
                createCookie(`access_token=${data.access_token}`)
                getUserInfo()
                    // hideLogin()
                    // window.open(
                    //     "target.html"
                    // ); /*opens the target page while Id & password matches*/
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
            console.log("Logout Funktioniert");

        }).catch(function(err) {


        });
    } else {
        // Login/ Registrierung einblenden + User Übersicht ausblenden
    }
    console.log("TEST LOGOUT")
}



export function FetchOrte() {
    fetch('https://freebox.live:8888/api/standorte-noauth/', {
        // headers: {
        //     'Content-Type': 'application/json',
        //     'Access-Control-Allow-Origin': '*'
        // },
        referrer: 'no-referrer'
    }).then(function(response) {

        // The API call was successful!

        return response.json();


        // There was an error


    }).then(function(data) {
        // This is the JSON from our response



        initMap(data)
       // console.log("FETCH DATA", data);
    }).catch(function(err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });
}

// Get today's date for date input
document.getElementById('date1').value = new Date().toISOString().substring(0, 10);
document.getElementById('date2').value = new Date().toISOString().substring(0, 10);

// create a variable for the login form
const formLogin = document.querySelector(".loginForm");
// if the form exists, run the class
if (formLogin) {
    console.log("Neues Formular wird abgeschickt -----------------------")
        // setup the fields we want to validate, we only have two but you can add others
    const fieldsLogin = ["email", "password"];
    // run the class
    const validatorLogin = new Login(formLogin, fieldsLogin);
    console.log("Neues Objekt wird erstellt -----------------------", validatorLogin)
}

const formRegister = document.querySelector(".registerForm");
if (formRegister) {
    const fieldsRegister = ["email", "password"];
    const validatorRegister = new Register(formRegister, fieldsRegister);
}

// Get today's date for date input
document.getElementById('date1').value = new Date().toISOString().substring(0, 10);
document.getElementById('date2').value = new Date().toISOString().substring(0, 10);





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
 //   console.log("Database opened successfully");

    const db = request.result;
    const transaction = db.transaction("boxes", "readwrite");

    const store = transaction.objectStore("boxes");
    const strasseIndex = store.index("boxen_strasse");
    const adresseIndex = store.index("adresse");
    const stadtIndex = store.index("boxen_stadt");
    const zipIndex = store.index("boxen_zip");


    // Add some data
    store.put({ id: 1, strasse: "Straßmannstraße 29", zip: "10249", stadt: "Berlin" });
    store.put({ id: 2, strasse: "Ramlerstr 7", zip: "13355", stadt: "Berlin" });
    store.put({ id: 3, strasse: "Reinharhtdtr 41", zip: "10117", stadt: "Berlin" });
    store.put({ id: 4, strasse: "Schlegelstr 13", zip: "10115", stadt: "Berlin" });


    // Query the data
    const idQuery = store.get(4);
    const stadtQuery = stadtIndex.getAll(["Berlin"]);
    const adresseQuery = adresseIndex.get(["Straßmannstraße 29", "Berlin", "10249"]);

    idQuery.onsuccess = function() {
    //    console.log("idQuery", idQuery.result);
    };

    stadtQuery.onsuccess = function() {
    //    console.log("stadtQuery", stadtQuery.result);
    };

    adresseQuery.onsuccess = function() {
      //  console.log("adresseQuery", adresseQuery.result);
    };

    const deleteBox = store.delete(1);

    deleteBox.onsuccess = function() {
     //   console.log("Straßmannstraße 29, 10249 Berlin wurde gelöscht'");
    };

    const stadtBerlin = stadtIndex.getKey(["Berlin"]);

    stadtBerlin.onsuccess = function() {
        const deleteBox = store.delete(stadtBerlin.result);

        deleteBox.onsuccess = function() {
           // console.log("Boxen in Berlin wurden gelöscht");
        };
    };
    transaction.oncomplete = function() {
        db.close();
    };
};