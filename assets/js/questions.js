const Api = 'https://sheet.best/api/sheets/8e00432d-526e-4324-95e4-7f67c215cdc6/tabs';


$.ajax({
    type: "GET",
    url: `${Api}/questions`,
    success: function(response) {
        Cookies.set('questions', response);
        Cookies.get('questions');
    }
});

$(document).ready(function() {
    $('button').click(function() {
        var answerSettings = {
            "type": "POST",
            "mode": 'cors',
            "url": `${Api}/questions`,
            "headers": {
                'Content-Type': 'application/json',
            },
            "body": JSON.stringify({ "chosen_answer": "" })
        }
    })

    $.ajax(answerSettings).done(function() {})
        // document.querySelector('button').
});