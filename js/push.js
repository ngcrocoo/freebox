//PUSHNOTIFICATION

//NOTIFICATION

if (Notification.permission === "granted") {
    alert("Push Notification zugestimmt");
    showNotification();
} else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(permission => {
        showNotification();
    });
}

function showNotification() {
    const notification = new Notification("NEUE NACHRICHT:", {
        body: "Hey, diese Webanwednung ist downloadbar."
    });
}