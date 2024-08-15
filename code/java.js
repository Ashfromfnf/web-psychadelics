function fadeOut(thing) {
    var fadeTarget = document.getElementById(thing);
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 200);
}


function fullscreen(i) {
    if (!i) {
        elem = document.body
    } else {
        document.getElementById(i)
    }
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
       elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    }

    document.getElementById("F11").style.opacity = 0
    document.getElementById("F11").style.borderRadius = "200px"
}
