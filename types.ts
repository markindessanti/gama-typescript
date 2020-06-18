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

// Never

function loopInfinito() : never {
	while (true) {
		// code ...
	}
}

function erro(mensagem:string) : never {
	throw new Error(mensagem);
}

function falha() {
	return erro('Algo falhou...');
}

// Union types
let nota: number | string = 10;
nota = '5';

function exibirNota(nota:string | number) {
	console.log('A nota do aluno foi ', nota);
}

exibirNota(nota);

// Alias
type Funcionario = {
    nome: string,
    sobrenome: string,
    dataDeNascimento: Date
}

const funcionarios:Funcionario[] = [
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
]

function tratarFuncionarios(funcionarios:Funcionario[]) {
    for (let funcionario of funcionarios) {
		console.log('O nome do funcionário é', funcionario.nome);		
	}
}

tratarFuncionarios(funcionarios);

// Valores Nulos ou Opcionais - Atentar para o ? na definição do tipo, que torna o telefone2 como opcional
let altura: number | null = 1.6;

type Contato = {
	nome: string,
	telefone1: string,
	telefone2?: string
}

const contato:Contato = {
	nome: 'José',
	telefone1: '1234567'
}

console.log(contato);