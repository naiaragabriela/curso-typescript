interface Humano {
    nome: string
    idade?: number
    saudar(sobrenome: string): void
}


function saudarComOla(pessoa: Humano) {
    console.log('Olá, ' + pessoa.nome)
}

function mudarNome(pessoa: Humano) {
    pessoa.nome = 'Joana'
}

const pessoa: Humano = {
    nome: 'Maria',
    idade: 26,
    saudar (sobrenome: string) {
        console.log('Olá meu nome é ' + this.nome + ' ' + sobrenome)
    }
}

saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)
pessoa.saudar('Silva')


// Usando Classes


class Cliente implements Humano {
    nome: string = ''
    ultimaCompra: Date = new Date
    saudar(sobrenome: string, ) {
        console.log('Olá, meu nome é ' + this.nome + ' ' + sobrenome)
    }
}

const meuCliente = new Cliente()
meuCliente.nome = 'Leo'
saudarComOla(meuCliente)
meuCliente.saudar('Oliveira')
console.log(meuCliente.ultimaCompra)

// Interface e função 

interface FuncaoCalculo {
    (a: number, b: number): number
}

let potencia: FuncaoCalculo

potencia = function(): number { 
    return Math.pow(3, 10)
}

console.log(potencia(3, 10))