document.addEventListener("DOMContentLoaded", () =>{
  const recentImageDataUrl = localStorage.getItem("recent-image1");

  if (recentImageDataUrl) {
    document.querySelector("#previewImg").setAttribute("src", recentImageDataUrl);
  }
});
