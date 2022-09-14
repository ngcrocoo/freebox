// // This works on all devices/browsers, and uses IndexedDBShim as a final fallback
// const indexedDB =
//     window.indexedDB ||
//     window.mozIndexedDB ||
//     window.webkitIndexedDB ||
//     window.msIndexedDB ||
//     window.shimIndexedDB;

// // Open (or create) the database
// const request = indexedDB.open("BoxenDatabase", 1);

// request.onerror = function(event) {
//     console.error("An error occurred with IndexedDB");
//     console.error(event);
// };

// // Create the schema on create and version upgrade
// request.onupgradeneeded = function() {
//     const db = request.result;
//     const store = db.createObjectStore("boxes", { keyPath: "id" });
//     store.createIndex("boxen_strasse", ["strasse"], { unique: false });
//     store.createIndex("boxen_stadt", ["stadt"], { unique: false });
//     store.createIndex("boxen_zip", ["zip"], { unique: false });
//     store.createIndex("boxen_user", ["user"], { unique: false });
//     store.createIndex("boxen_foto", ["foto"], { unique: false });

//     store.createIndex("adresse", ["strasse", "stadt", "zip"], {
//         unique: false,
//     });
// };

// request.onsuccess = function() {
//     console.log("Database opened successfully");

//     const db = request.result;
//     const transaction = db.transaction("boxes", "readwrite");

//     const store = transaction.objectStore("boxes");
//     const strasseIndex = store.index("boxen_strasse");
//     const adresseIndex = store.index("adresse");
//     const stadtIndex = store.index("boxen_stadt");
//     const zipIndex = store.index("boxen_zip");


//     // Add some data
//     store.put({ id: 1, strasse: "Straßmannstraße 29", zip: "10249", stadt: "Berlin" });
//     store.put({ id: 2, strasse: "Ramlerstr 7", zip: "13355", stadt: "Berlin" });
//     store.put({ id: 3, strasse: "Reinharhtdtr 41", zip: "10117", stadt: "Berlin" });
//     store.put({ id: 4, strasse: "Schlegelstr 13", zip: "10115", stadt: "Berlin" });


//     // Query the data
//     const idQuery = store.get(4);
//     const stadtQuery = stadtIndex.getAll(["Berlin"]);
//     const adresseQuery = adresseIndex.get(["Blue", "Honda"]);

//     idQuery.onsuccess = function() {
//         console.log("idQuery", idQuery.result);
//     };

//     stadtQuery.onsuccess = function() {
//         console.log("stadtQuery", stadtQuery.result);
//     };

//     adresseQuery.onsuccess = function() {
//         console.log("adresseQuery", adresseQuery.result);
//     };

//     const deleteBox = store.delete(1);

//     deleteBox.onsuccess = function() {
//         console.log("Straßmannstraße 29, 10249 Berlin wurde gelöscht'");
//     };

//     const stadtBerlin = stadtIndex.getKey(["Berlin"]);

//     stadtBerlin.onsuccess = function() {
//         const deleteBox = store.delete(stadtBerlin.result);

//         deleteBox.onsuccess = function() {
//             console.log("Boxen in Berlin wurden gelöscht");
//         };
//     };
//     transaction.oncomplete = function() {
//         db.close();
//     };
// };