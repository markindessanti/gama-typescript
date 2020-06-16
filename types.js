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
var objetoCriado = criarObjeto({
    propriedade: 1
});
console.log(objetoCriado);
