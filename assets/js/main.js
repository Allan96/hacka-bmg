$(document).ready(function() {
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
        Cookies.set('auth', response);
    });
});