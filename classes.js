// Forma padrão de declaração de classe
var Data = /** @class */ (function () {
    function Data(dia, mes, ano) {
        if (ano === void 0) { ano = 1970; }
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    return Data;
}());
var novaData = new Data(23, 5, 1979);
console.log(novaData.dia);
// Forma reduzida de declaracao de classe do Typescript
var NovaData = /** @class */ (function () {
    function NovaData(dia, mes, ano) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    return NovaData;
}());
var novaData2 = new Data(23, 5, 1979);
console.log(novaData2.ano);
// Modificadores de acesso
var Carro = /** @class */ (function () {
    function Carro(marca, modelo) {
        this.velocidadeAtual = 0;
    }
    Carro.prototype.alterarVelocidade = function (delta) {
        //...
    };
    Carro.prototype.acelerar = function () {
        this.alterarVelocidade(5);
    };
    Carro.prototype.frear = function () {
        this.alterarVelocidade(-5);
    };
    return Carro;
}());
var carro = new Carro('FIAT', 'Uno');
carro.acelerar();
console.log(carro);
