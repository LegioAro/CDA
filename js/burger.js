$(document).ready(function () {
    $('.burger').click(function (event) {
        $('.burger,.header__nav-block').toggleClass('active');
        $('body').toggleClass('lock');
    });
});