let html = $("html");
const section1 = $("#section1");
let page = 1;
html.animate({ 'scrollTop': 0 }, 10);


$(document).ready(function () {

    $(window).on("wheel", function (e) {
        let y = e.originalEvent.deltaY
        if (html.is(":animated")) return;
        if (y > 0) {
            if (page == 4) return;
            page++;
        } else if (y < 0) {
            if (page == 1) return;
            page--;
        }
        let posTop = (page - 1) * $(window).height();
        html.animate({ scrollTop: posTop }, 700);
    })

    $('.navigate ul li a').on('click', function (e) {
        e.preventDefault();
        if (e.target.id == 'header') page = 1
        if (e.target.id == 'skill') page = 2
        if (e.target.id == 'project') page = 3
        if (e.target.id == 'footer') page = 4

        let posTop = (page - 1) * $(window).height();
        html.animate({ scrollTop: posTop }, 800);
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

consoleText(['안녕하세요.', '프론트엔드 개발자를 꿈꾸는', '조다한입니다.'], 'name', ['white']);

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
    }, 100)
}









    // function whale() {
    //     function infinite($whale, up, down) {
    //         $whale.animate({ top: up }, 2000, 'linear').animate({ top: down }, 2000, 'linear', () => infinite($whale, up, down))
    //         console.log(down)
    //     }
    //     particlesJS.load('particles-js', 'assets/particles.json', function () {
    //         console.log('callback - particles.js config loaded');
    //     });
    //     const delay = (i) => {
    //         setTimeout(() => {
    //             const getRandomY = $(window).height() - 800;
    //             console.log(getRandomY)
    //             const up = getRandomY - 500
    //             const down = getRandomY + 500
    //             let $whale = $(`<img class='whale' src='../../Downloads/scandi-156.png' art='whale'/>`)
    //             $whale.css({ 'position': 'absolute', 'top': getRandomY, 'left': '92%' })
    //             section1.append($whale)
    //             $whale.animate({ top: up, }, 2000,).animate({ top: down, }, 2000, () => {
    //                 infinite($whale, up, down)
    //             })
    //         }, i * 1700);
    //     }

    //     for (let i = 0; i < 1; i++) {
    //         // delay(i)
    //     }
    // }
    // whale()


// // 브라우저 창 크기에 따른 별 생성
// window.onresize = () => {
//     makeStars();
// }

// const makeStars = () => {
//     // 브라우저 가장 큰 크기
//     const maxSize = Math.max(window.innerWidth, window.innerHeight)
//     // 랜덤한 X 위치 값
//     const getRandomX = () => Math.random() * maxSize;

//     // 랜덤한 Y 위치 값
//     const getRandomY = () => Math.random() * maxSize;

//     // 랜덤한 크기 (circle는 반지름이 크기)
//     const randomRadius = () => Math.random() * 0.7 + 0.6;

//     // 임의의 값
//     const _size = Math.floor(maxSize / 2);

//     const htmlDummy = new Array(_size).fill().map((_, i) => {
//         return `<circle class='star'
//         cx=${getRandomX()}
//         cy=${getRandomY()}
//         r=${randomRadius()}
//         className="star" />`
//     }).join('');

//     section1.html(htmlDummy);
// }

// window.onload = () => {
//     makeStars();
// }