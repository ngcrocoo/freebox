export default function Webcam() {
    (() => {
        if (!navigator.mediaDevices) {
            alert("No camera access");
            return;
        }

        const camerasSelect = document.querySelector("#cameras");
        camerasSelect.addEventListener("change", handleChangeCamera);

        const camera = document.querySelector("#camera");
        const useCam = document.getElementById("takePic")
        const newPhoto = document.getElementById("newPic")

        const uploadButton = document.getElementById("uploadBtn")
        uploadButton.addEventListener("click", sendData);
        uploadButton.style.display = "none"

        useCam.addEventListener("click", takeSnapshot);
        newPhoto.addEventListener("click", newSnapshot);

        newPhoto.style.display = "none";
        const takePhoto = document.createElement("a");
        // set the name of the download, could change this to something
        // unique
        takePhoto.download = "download.png";

        const preview = document.querySelector("#preview");
        // on click of preview image, click the download link to download file
        preview.addEventListener("click", () => takePhoto.click());

        const canvas = document.createElement("canvas");

        /**
         *  generates a still frame image from the stream in the <video>
         *  appends the image to the <body>
         */

        function takeSnapshot() {
            var context;

            var width = camera.offsetWidth,
                height = camera.offsetHeight;

            canvas.width = width;
            canvas.height = height;

            context = canvas.getContext("2d");

            context.drawImage(camera, 0, 0, width, height);

            const imageData = canvas.toDataURL("image/png");
            const base64Canvas = canvas.toDataURL("image/jpeg").split(';base64,')[1];
            console.log("picture data: ", base64Canvas)
                // var picByte = base64ToArrayBuffer(base64Canvas)
                // console.log("OOOO - picture btyes: ", picByte)


            localStorage.setItem('globalImage', base64Canvas);
            camera.style.display = "none";
            newPhoto.style.display = "block";
            useCam.style.display = " none"
            uploadButton.style.display = "block"
            preview.src = imageData;
            preview.style.display = "block"

        }


        function base64ToArrayBuffer(base64) {
            var binary_string = window.atob(base64);
            var len = binary_string.length;
            var bytes = new Uint8Array(len);
            for (var i = 0; i < len; i++) {
                bytes[i] = binary_string.charCodeAt(i);
            }
            return bytes.buffer;
        }

        function newSnapshot() {
            newPhoto.style.display = "none";
            useCam.style.display = "block"
            preview.style.display = "none";
            camera.style.display = "block";
            uploadButton.style.display = "none"
        }

        function sendData() {

        }


        function gotDevices(mediaDevices) {
            camerasSelect.innerHTML = "";
            let count = 1;
            mediaDevices.forEach(mediaDevice => {
                if (mediaDevice.kind === "videoinput") {
                    const option = document.createElement("option");
                    option.value = mediaDevice.deviceId;
                    const label = mediaDevice.label || `Camera ${count++}`;
                    const textNode = document.createTextNode(label);
                    option.appendChild(textNode);
                    camerasSelect.appendChild(option);
                }
            });
        }

        function handleChangeCamera(event) {
            const deviceId = event.target.value;
            setDevice(String(deviceId).trim() === "" ? undefined : deviceId);
        }

        function setDevice(deviceId) {
            const constraint = {
                video: deviceId === undefined ? // default to rear camera
                    { facingMode: "environment" } : // use specified device
                    { deviceId }
            };

            navigator.mediaDevices
                .getUserMedia(constraint)
                .then(function(stream) {
                    const deviceId = stream.getTracks().map(t => t.getSettings().deviceId);

                    camerasSelect.value = deviceId;
                    camera.srcObject = stream;
                })
                .catch(function(error) {
                    document.body.textContent =
                        "Could not access the camera. Error: " + error.name;
                });
        }

        // get list of all devices and add them to cameras select
        navigator.mediaDevices.enumerateDevices().then(gotDevices);

        // set device to default environment camera
        setDevice();
    })();


}