// installing service worker. 
// install works just once for every browser and will be installed again
// if this file is changed
self.addEventListener('install', evt => {
    console.log('service worker has been installed');
});

// activate service worker
self.addEventListener('activate', evt => {
    console.log('service worker has been activated');
});


// fetch event
self.addEventListener('fetch', evt => {
    console.log('fetch event', evt);
});