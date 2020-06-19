// Forma padrão de declaração de classe
class Data {
	dia: number;
	mes: number;
	ano: number

	constructor(dia: number, mes: number, ano: number = 1970) {
		this.dia = dia;
		this.mes = mes;
		this.ano = ano;
	}
}

const novaData = new Data(23, 5, 1979);

console.log(novaData.dia);

// Forma reduzida de declaracao de classe do Typescript
class NovaData {
	constructor(
		public dia: number,
		public mes: number,
		public ano: number
	) { }
}

const novaData2 = new Data(23, 5, 1979);

console.log(novaData2.ano);

// Modificadores de acesso
class Carro {
	private velocidadeAtual: number = 0;

	constructor(
		marca: string,
		modelo: string,
		private velocidadeMaxima:number = 220
	) { }

	private alterarVelocidade(delta:number) {
		const novaVelocidade = this.velocidadeAtual + delta;

		if (novaVelocidade >= 0 && novaVelocidade < this.velocidadeMaxima) {
			this.velocidadeAtual = novaVelocidade;
		}else{
			this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
		}
	}

	acelerar() {
		this.alterarVelocidade(5);
	}

	frear(){
		this.alterarVelocidade(-5);
	}
}

const carro = new Carro('FIAT', 'Uno', 180);

carro.acelerar();

console.log(carro);