$(document).ready(function() {

    $('#cpf').mask('000.000.000-00');
    $('#button-login').click(function(e) {
        e.preventDefault();
        $('.step-0').fadeOut(0);
        $('#form-login').fadeIn();
    });

    $('.step-1 button').click(function(e) {
        e.preventDefault();
        $('.step-1').fadeOut(0);
        $('.step-2').fadeIn();
    });

    $('#form-login').submit(function(e) {
        e.preventDefault();
        var settings = {
            "url": "https://fake-meu-bmg.rj.r.appspot.com/graphql",
            "method": "POST",
            "timeout": 0,
            "headers": {
                "Content-Type": "application/json"
            },
            "data": JSON.stringify({ "query": "mutation SignInMutation($email: String!, $password: String!) {\n    SignInMutation(input: { email: $email, password: $password }) {\n      usuario {\n        id\n        nome\n        email\n        cpf\n        accessToken\n      }\n      success\n      errors\n    }\n  }", "variables": { "email": "hackthon@bancobmg.com.br", "password": "meubmghackthon" }, "operationName": "SignInMutation" }),
        };
        $.ajax(settings).done(function() {});
        const response = {
            "data": {
                "SignInMutation": {
                    "usuario": {
                        "id": "VXN1YXJpby0y",
                        "nome": "Meu BMG",
                        "email": "hackthon@bancobmg.com.br",
                        "cpf": "05111620656",
                        "accessToken": "2:meu_bmg_hackthon"
                    },
                    "success": true,
                    "errors": []
                }
            }
        }
        console.log(response);
        Cookies.set('auth', response);
        window.location.href = "./onboarding.html";
    });
});