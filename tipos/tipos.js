// string
var nome = 'João';
console.log(nome);
// numbers
var idade = 27;
console.log(idade);
// boolean
var hoobie = false;
console.log(hoobie);
// tipos explicitos
var minhaIdade = 26;
console.log(typeof minhaIdade);
// array 
var hobbies = ["Cozinhar", "Ler", "Correr"];
console.log(hobbies[0]);
console.log(typeof hobbies);
console.log(hobbies);
// tuplas
var endereco = ["Rua Principal", 99];
console.log(endereco);
// enum - valores pré definidos
var Cor;
(function (Cor) {
    Cor[Cor["Amarelo"] = 0] = "Amarelo";
    Cor[Cor["Vermelho"] = 1] = "Vermelho";
    Cor[Cor["Azul"] = 2] = "Azul";
})(Cor || (Cor = {}));
var minhaCor = Cor.Amarelo;
console.log(minhaCor);
// any
var carro = "BMW";
console.log(carro);
carro = { marca: "BMW", ano: 2019 };
console.log(carro);
