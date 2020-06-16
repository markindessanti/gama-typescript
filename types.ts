// Boolean
const contaPaga:boolean = false;

// Number
const idade:number = 41;
const avaliacao:number = 4.5;

// String
const nome:string = 'Markin Dessanti';

// Array
const idades:number[] = [22, 54, 39];
const idades2: Array<number> = [95, 92, 54, 29, 12];

// Tuple
let jogadores: [string, number, boolean];
jogadores = ['Fulano', 27, true];

// Enum
enum statusAprovacao {
	Aprovado = '001',
	Pendente = '002',
	Rejeitado = '003'
}

const statusDaAprovacao : statusAprovacao = statusAprovacao.Aprovado;

// Any
const retornoDaAPI:any[] = [123, 'Markin Dessanti', true];
const retornoDaAPI2: any = {
	//...
};

// Void
function printarNaTela(msg:string): void {
	console.log(msg);
}

// Null e Undefined
const u:undefined = undefined;
const n:null = null;

// Object
function criarObjeto(objeto:object) {
	return objeto;
}

// const objetoCriado = criarObjeto ('Markin'); // Dá erro, pois o parâmetro tem que ser do tipo object

const objetoCriado = criarObjeto ({
	propriedade: 1
});

console.log(objetoCriado);