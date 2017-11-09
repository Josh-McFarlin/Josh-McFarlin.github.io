function addContent(element, contentToAdd, callback) {
    let pos = 0;
    let origLength = element.innerHTML.length;
    let addLength = contentToAdd.length;
    let endLength = origLength + addLength;
    let intervalId = setInterval(function() {
        if (element.innerHTML.length === endLength) {
            clearInterval(intervalId);

            if (callback) {
                setTimeout(callback, 100);
            }
        }

        element.innerHTML += contentToAdd.charAt(pos);
        pos++;
    }, 225);
}

function expand(img) {
    let modalClass = document.getElementsByClassName('modal')[0];
    let modal = document.getElementById('myModal');
    let modalImg = document.getElementById("modalImg");

    modal.style.display = "block";
    modalImg.src = img.src;
    //modalClass.style.paddingTop = ((window.innerHeight - modalImg.clientHeight)/2).toString() + "px";

    let span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.style.display = "none";
    };
}

function contactMe() {
    let links = document.getElementsByClassName("nav-link");
    if (document.getElementById("contactButton").style.display === 'block') {
        document.getElementById("contactButton").style.display = 'none';
        for (let i = 0; i < links.length; i++) {
            links[i].style.display = "inherit";
        }
    } else {
        document.getElementById("contactButton").style.display = 'block';
        for (let i = 0; i < links.length; i++) {
            links[i].style.display = "none";
        }
    }
}

window.onload = function(){
    let myName = document.getElementById('myName');
    addContent(myName, "Josh McFarlin.");
};

let typed = new Typed('#typed-strings', {
    strings: ["Python", "Java", "Swift", "Ionic", "Web Design", "Circuit Design", "CAD Modeling", "Photogrammetry"],
    typeSpeed: 100,
    backSpeed: 60,
    backDelay: 2000,
    loop: true,
    loopCount: Infinity,
    showCursor: true
});