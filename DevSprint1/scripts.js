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
