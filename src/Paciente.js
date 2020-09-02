function Paciente(nome, idade, peso, altura) {
    var main = {
        imprime: function () {
            alert(nome + " tem " + idade + " anos");
        },

        batimentos: function () {
            return idade * 365 * 24 * 60 * 80;
        },

        imc: function() {
            return peso / (altura ** 2 );
        }
    };

    return main;
}