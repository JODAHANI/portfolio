$(document).ready(function() {
    $('.fa-envelope-o').on('click',function(e) {
        e.preventDefault();
        $('.fa-envelope-o').addClass('on')
        setTimeout(() => {
            $('.fa-envelope-o').removeClass('on')
        },2000)
        const textarea = document.createElement('textarea');
        textarea.textContent = 'dan0748@naver.com';
        document.body.append(textarea);
        textarea.select();
        document.execCommand('copy');
        textarea.remove();
    })
})