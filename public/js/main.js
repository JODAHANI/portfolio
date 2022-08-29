let html = $("html");
const section1 = $("#section1");
var page = 1;
html.animate({ 'scrollTop': 0 }, 10);
let startCheck;
let endCheck;
$(document).ready(function () {
    $('#fullpage').fullpage({
        autoScrolling: true,
    });
    function pageMove(e) {
        let y = e.originalEvent.deltaY
        if (y) {
            if (y > 0) {

                if (page == 4) return;
                page++;
            } else if (y < 0) {
                if (page == 1) return;
                page--;
            }
            if (page == 2) {
                classAdd()
            }
        } 
    }
    $(window).on("wheel", function (e) {
        pageMove(e)

    })
    $(window).on("touchstart", function (e) {
        startCheck = e.originalEvent.changedTouches[0].screenY
    })
    $(window).on("touchend", function (e) {
        endCheck = e.originalEvent.changedTouches[0].screenY
        if(endCheck < startCheck) {
            classAdd()
        }
    })
    $('.navigate ul li a').on('click', function (e) {
        console.log(e.target.id)
        switch (e.target.id) {
            case 'header': {
                page = 1;
                break;
            }
            case 'skill': {
                page = 2;
                classAdd()
                break;

            }
            case 'project': {
                page = 3;
                break;
            }
            case 'footer': {
                page = 4
                break;
            }
        }

    })
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 140, "density": {
                    "enable": true, "value_area": 800
                }
            }, "color": {
                "value": "#ffffff"
            }, "shape": {
                "type": "circle", "stroke": {
                    "width": 0, "color": "#000000"
                }, "polygon": {
                    "nb_sides": 5
                }, "image": {
                    "src": "img/github.svg", "width": 100, "height": 100
                }
            }, "opacity": {
                "value": 1, "random": false, "anim": {
                    "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false
                }
            }, "size": {
                "value": 3, "random": true, "anim": {
                    "enable": false, "speed": 1, "size_min": 0.1, "sync": false
                }
            }, "line_linked": {
                "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1
            }, "move": { "enable": true, "speed": 3, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } }
        }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true
    });
})

consoleText(['안녕하세요.', '주체적으로 생각하고 움직이는', '프론트엔드 개발자', '조다한입니다.'], 'name', ['white']);

function consoleText(words, id, colors) {
    if (colors === undefined) colors = ['#fff'];
    var visible = true;
    var con = document.getElementById('name');
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    var target = document.getElementById(id)
    target.setAttribute('style', 'color:' + colors[0])
    window.setInterval(function () {
        if (letterCount === 0 && waiting === false) {
            waiting = true;
            target.innerHTML = words[0].substring(0, letterCount)
            window.setTimeout(function () {
                var usedColor = colors.shift();
                colors.push(usedColor);
                var usedWord = words.shift();
                words.push(usedWord);
                x = 1;
                target.setAttribute('style', 'color:' + colors[0])
                letterCount += x;
                waiting = false;
            }, 1000)
        } else if (letterCount === words[0].length + 1 && waiting === false) {
            waiting = true;
            window.setTimeout(function () {
                x = -1;
                letterCount += x;
                waiting = false;
            }, 1000)
        } else if (waiting === false) {
            target.innerHTML = words[0].substring(0, letterCount)
            letterCount += x;
        }
    }, 90)
}




function classAdd() {
    $('.section-inner').addClass('on')
}

function classRemove() {
    $('.section-inner').removeClass('on')
}