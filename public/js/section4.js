$(document).ready(function() {
    $('.fa-envelope-o').on('click',function() {
        $('.fa-envelope-o').addClass('on')
        setTimeout(() => {
            $('.fa-envelope-o').removeClass('on')
        },2000)
        const text = document.getElementById('text').textContent
    })
})