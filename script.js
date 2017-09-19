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

function deleteContent(element, callback) {
    var intervalId = setInterval(function() {
        if (element.innerHTML.length === 0) {
            clearInterval(intervalId);

            if (callback) {
                setTimeout(callback, callbackPause);
            }
        }

        element.innerHTML = element.innerHTML.substring(0, element.innerHTML.length - 1);
    }, intervalTime);

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