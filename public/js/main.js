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
})


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