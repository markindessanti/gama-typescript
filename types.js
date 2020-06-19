"use strict";
// Boolean
var contaPaga = false;
// Number
var idade = 41;
var avaliacao = 4.5;
// String
var nome = 'Markin Dessanti';
// Array
var idades = [22, 54, 39];
var idades2 = [95, 92, 54, 29, 12];
// Tuple
var jogadores;
jogadores = ['Fulano', 27, true];
// Enum
var statusAprovacao;
(function (statusAprovacao) {
    statusAprovacao["Aprovado"] = "001";
    statusAprovacao["Pendente"] = "002";
    statusAprovacao["Rejeitado"] = "003";
})(statusAprovacao || (statusAprovacao = {}));
var statusDaAprovacao = statusAprovacao.Aprovado;
// Any
var retornoDaAPI = [123, 'Markin Dessanti', true];
var retornoDaAPI2 = {
//...
};
// Void
function printarNaTela(msg) {
    console.log(msg);
}
// Null e Undefined
var u = undefined;
var n = null;
// Object
function criarObjeto(objeto) {
    return objeto;
}
// const objetoCriado = criarObjeto ('Markin'); // Dá erro, pois o parâmetro tem que ser do tipo object
var objetoCriado = criarObjeto({
    propriedade: 1
});
console.log(objetoCriado);
// Never
function loopInfinito() {
    while (true) {
        // code ...
    }
}
function erro(mensagem) {
    throw new Error(mensagem);
}
function falha() {
    return erro('Algo falhou...');
}
// Union types
var nota = 10;
nota = '5';
function exibirNota(nota) {
    console.log('A nota do aluno foi ', nota);
}
exibirNota(nota);
var funcionarios = [
    {
        nome: 'Markin',
        sobrenome: 'Dessanti',
        dataDeNascimento: new Date()
    },
    {
        nome: 'Ciclano',
        sobrenome: 'da Silva',
        dataDeNascimento: new Date()
    }
];
function tratarFuncionarios(funcionarios) {
    for (var _i = 0, funcionarios_1 = funcionarios; _i < funcionarios_1.length; _i++) {
        var funcionario = funcionarios_1[_i];
        console.log('O nome do funcionário é', funcionario.nome);
    }
}
tratarFuncionarios(funcionarios);
// Valores Nulos ou Opcionais - Atentar para o ? na definição do tipo, que torna o telefone2 como opcional
var altura = 1.6;
var contato = {
    nome: 'José',
    telefone1: '1234567'
};
console.log(contato);
// Type Assertion (com alternativa de declaração nos comentários)
var minhaIdade = 23;
minhaIdade.toString();
// (<number>minhaIdade).toString();
var input = document.getElementById('numero');
// const input = <HTMLInputElement>document.getElementById('numero');
console.log(input.value);
