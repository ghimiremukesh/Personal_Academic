window.onload = choosePic;

var myPix = new Array("Photos/acadia.jpg", "Photos/golden_gate.jpg", "Photos/mounthood.jpg", "Photos/multonomah.jpg", "Photos/rainier.jpg", "Photos/yosemite.jpg", "Photos/london_bridge.HEIC", "Photos/stonehenge.HEIC", "Photos/oxford.HEIC")

function choosePic() {
    var randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById("myPicture").src = myPix[randomNum];}