// code to open the 'add pic from' div
function openAddFrom(){
  var container = document.getElementById("addFromContainer");
  container.style.display = "block";
}
//code to close the 'add pic from' div
function closeAddFrom(){
  var container = document.getElementById("addFromContainer");
  container.style.display = "none";
}



//set constants

var constraints = { video: { facingMode: "environment" }, audio: false };

const cameraView = document.querySelector("#cameraView"),
cameraSensor = document.querySelector("#cameraSensor"),
captureButton = document.querySelector("#captureButton"),
picPreview = document.querySelector("picPreview")

function cameraStart() {
    navigator.mediaDevices
        .getUserMedia(constraints)
        .then(streamCam)
    .catch(function(error) {
        console.error("Oops. Something is broken.", error);
    });
}

function streamCam(media) {
track = media.getTracks()[0];
cameraView.srcObject = media;
}

// Start the video stream when the window loads
window.addEventListener("load", cameraStart, false);

// code to capture photo
function capturePic(){
  cameraSensor.width = cameraView.videoWidth;
  cameraSensor.height = cameraView.videoHeight;
  cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
  picPreview.src = cameraSensor.toDataURL("image/webp");
  picPreview.classList.add("picPreview");
}

//show div to customise new receipt record
function showCreate(){
  var container = document.getElementById("showCreate");
  container.style.display = "block";
  console.log("w");
}
//close details
function closeDetails(){
  var container = document.getElementById("showCreate");
  container.style.display = "none";
}
