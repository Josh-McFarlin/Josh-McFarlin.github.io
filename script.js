var fancyText = document.getElementById('fancy');
var intervalTime = 225;
var callbackPause = 100;

function addContent(element, contentToAdd, callback) {
    var pos = 0;
    var origLength = element.innerHTML.length;
    var addLength = contentToAdd.length;
    var endLength = origLength + addLength;
    var intervalId = setInterval(function() {
        if (element.innerHTML.length === endLength) {
            clearInterval(intervalId);

            if (callback) {
                setTimeout(callback, callbackPause);
            }
        }

        element.innerHTML += contentToAdd.charAt(pos);
        pos++;
    }, intervalTime);
}

function expand(img) {
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById("modalImg");
    var captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;

    var span = document.getElementsByClassName("close")[0];

    span.onclick = function() {
        modal.style.display = "none";
    };
}

window.onload = addContent(fancyText, "Josh McFarlin.");

var typed = new Typed('#typed-strings', {
    strings: ["Python", "Java", "Swift", "Ionic", "Circuit Design", "CAD Modeling", "Photogrammetry"],
    typeSpeed: 100,
    backSpeed: 60,
    backDelay: 2000,
    loop: true,
    loopCount: Infinity,
    showCursor: true
});