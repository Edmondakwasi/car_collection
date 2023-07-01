
function action(newImageSrc) {
  document.getElementById("image").src = newImageSrc;
}


function showVideo() {
document.getElementById("myVideo").style.display = "block";
}


if (/Mobi|Android/i.test(navigator.userAgent)) {
  document.getElementById("warning").style.display = "block";
}

