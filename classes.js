var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
    function Carro(marca, modelo, velocidadeMaxima) {
        if (velocidadeMaxima === void 0) { velocidadeMaxima = 220; }
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    Carro.prototype.alterarVelocidade = function (delta) {
        var novaVelocidade = this.velocidadeAtual + delta;
        if (novaVelocidade >= 0 && novaVelocidade < this.velocidadeMaxima) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
    };
    Carro.prototype.acelerar = function () {
        this.alterarVelocidade(5);
    };
    Carro.prototype.frear = function () {
        this.alterarVelocidade(-5);
    };
    Carro.prototype.obterVelocidade = function () {
        return this.velocidadeAtual;
    };
    return Carro;
}());
var carro = new Carro('FIAT', 'Uno', 180);
carro.acelerar();
console.log(carro);
// Herança
var Camaro = /** @class */ (function (_super) {
    __extends(Camaro, _super);
    function Camaro() {
        var _this = _super.call(this, 'Chevrolet', 'Camaro', 500) || this;
        _this.turbo = false;
        return _this;
    }
    Camaro.prototype.ligarTurbo = function () {
        this.turbo = true;
        console.log('Turbo ligado!');
    };
    return Camaro;
}(Carro));
var novoCamaro = new Camaro();
novoCamaro.acelerar();
novoCamaro.acelerar();
novoCamaro.acelerar();
novoCamaro.acelerar();
console.log('Velocidade Atual: ', novoCamaro.obterVelocidade());
novoCamaro.frear();
novoCamaro.frear();
novoCamaro.frear();
console.log('Velocidade Atual: ', novoCamaro.obterVelocidade());
novoCamaro.ligarTurbo();
