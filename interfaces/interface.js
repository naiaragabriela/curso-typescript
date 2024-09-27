function saudarComOla(pessoa) {
    console.log('Olá, ' + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = 'Joana';
}
var pessoa = {
    nome: 'Maria',
    idade: 26,
    saudar: function (sobrenome) {
        console.log('Olá meu nome é ' + this.nome + ' ' + sobrenome);
    }
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
pessoa.saudar('Silva');
// Usando Classes
var Cliente = /** @class */ (function () {
    function Cliente() {
        this.nome = '';
        this.ultimaCompra = new Date;
    }
    Cliente.prototype.saudar = function (sobrenome) {
        console.log('Olá, meu nome é ' + this.nome + ' ' + sobrenome);
    };
    return Cliente;
}());
var meuCliente = new Cliente();
meuCliente.nome = 'Leo';
saudarComOla(meuCliente);
meuCliente.saudar('Oliveira');
console.log(meuCliente.ultimaCompra);
var potencia;
potencia = function () {
    return Math.pow(3, 10);
};
console.log(potencia(3, 10));
