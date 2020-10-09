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

// Write code to load video
navigator.mediaDevices.getUserMedia({video: true})
.then(showVideo)
.catch((err) => console.error(err));

/**
* @param {MediaStream} media The media stream to display
**/
function showVideo(media) {
  console.log('Show video', media);
  var video = document.querySelector('video');
  video.srcObject = media;
}
