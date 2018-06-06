

window.onload = function() {

    var lightBox = document.getElementById("lightboxBg");
    var lightboxMessage = this.document.getElementById("lightbox");
    lightBox.style.display = "none";
    lightboxMessage.style.display = "none";
    var signBtn = document.getElementById("signBtn");
    signBtn.onclick = function() {lightbox(lightBox, lightboxMessage)};

    
}

function lightbox(lightBox, lightBoxMessage) {
    lightBox.style.display = "block";
    lightBoxMessage.style.display = "block";
}

function closeLightbox() {
    var lightBox = document.getElementById("lightboxBg");
    var lightBoxMessage = this.document.getElementById("lightbox");
    lightBox.style.display = "none";
    lightBoxMessage.style.display = "none";
    console.log("LightBox Closed");
}
