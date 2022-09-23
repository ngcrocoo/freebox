//PUSHNOTIFICATION

//NOTIFICATION

//console.log("notification:" + Notification.permission);

if (Notification.permission === "granted") {
    alert("Push Notification zugestimmt");
    showNotification();
} else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(permission => {
      //  console.log(permission);
        showNotification();
    });
}

function showNotification() {
    const notification = new Notification("NEUE NACHRICHT:", {
        body: "Hey, diese Webanwednung ist downloadbar."
    });
}


/*  <script>
//NOTIFICATION


console.log("notification: " + Notification.permission);

if (Notification.permission === "granted ") {
    alert("Push Notification zugestimmt ");
    showNotification();
} else if (Notification.permission !== "denied ") {
    Notification.requestPermission().then(permission => {
        console.log(permission);
        showNotification();
    });
}

function showNotification() {
    const notification = new Notification("NEUE NACHRICHT: ", {
        body: "hey wir haben jetzt notifications "
    });
}
</script>
**/