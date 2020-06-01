$(document).ready(function() {
    const Api = 'https://sheet.best/api/sheets/8e00432d-526e-4324-95e4-7f67c215cdc6/tabs';
    $.ajax({
        type: "GET",
        url: `${Api}/content`,
        success: function(response) {
            $('#conteudo_title').html(response[0].desc);
            $('#conteudo_txt').html(response[0].content);
            Cookies.set('content', response);
        }
    });


});