// interfaces
interface Usuario {
    nome: string,
    sobrenome: string,
    endereco?: string
}

function getUsuario(): Usuario {
	return {
		nome: 'Markin',
		sobrenome: 'Dessanti'
	}
}

console.log(getUsuario().nome, getUsuario().sobrenome);