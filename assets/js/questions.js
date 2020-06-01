$(document).ready(function() {

    const Api = 'https://sheet.best/api/sheets/8e00432d-526e-4324-95e4-7f67c215cdc6/tabs';
    const userId = 1;

    // Consulta dos pontos do usuário

    fetch(`${Api}/users/${userId}`)
        .then(response => response.json())
        .then(data => {
            Cookies.set('current_points', data[userId - 1].points);
        })
        .catch(error => {
            console.error(error);
        });


    // Seleção de pergunta

    function SelectQuestion(question) {
        $.ajax({
            type: "GET",
            url: `${Api}/questions`,
            success: function(response) {
                $('.quest-1 span#quest_id').html(response[question].question_id)
                $('.quest-1 h6.c-white.mb-5').html(response[question].question_text)
                const respostas = response[question].answers.split(",");
                $('.quest-1 ul#answers').html('');
                for (ans in respostas) {
                    $('ul#answers').append(`
                    <li class="answer d-flex" id="optA">
                        <input type="radio" name="ans" id="ans" value="${respostas[ans]}">
                        <label for="ans">${respostas[ans]}</label>
                    </li>
                `);
                    Cookies.set('right_answer', response[question].right_answer);
                    Cookies.set('questions', response);
                }
            }
        });
    }

    // 

    SelectQuestion(0);

    function Points(valor) {
        fetch(`${Api}/users/${userId}`, {
                method: 'PATCH',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    points: points + valor,
                }),
            })
            .then(r => r.json())
            .then(data => {
                // The response comes here
                console.log(data);
            })
            .catch(error => {
                // Errors are reported there
                console.log(error);
            });
    }
    $(".quest-1 form").submit(function(e) {
        e.preventDefault();
        window.location.href = "./question-2.html";
        const right_answer = Cookies.get('right_answer');
        const points = parseInt(Cookies.get('current_points'));
        const answer_select = $("form").serializeArray();
        if (right_answer == answer_select[0].value) {
            Points(50)
        } else {
            Points(-50)
        }
    });
});