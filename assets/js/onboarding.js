$(document).ready(function() {
    $('.step-1 button').click(function(e) {
        e.preventDefault();
        $('.step-1').fadeOut(0);
        $('.step-2').fadeIn();
    });
    $('.step-2 button').click(function(e) {
        e.preventDefault();
        $('.step-2').fadeOut(0);
        $('.step-3').fadeIn();
    });
    $('.step-3 button').click(function(e) {
        e.preventDefault();
        window.location.href = "./modulos.html";
    })
});