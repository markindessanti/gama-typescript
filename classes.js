// Forma padrão de declaração de classe
var Data = /** @class */ (function () {
    function Data(dia, mes, ano) {
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
