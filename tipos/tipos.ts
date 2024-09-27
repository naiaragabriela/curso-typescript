// string
let nome: string = 'João';
console.log(nome);

// numbers
let idade: number = 27
console.log(idade)

// boolean
let hoobie: boolean = false
console.log(hoobie)


// tipos explicitos
let minhaIdade: number = 26
console.log(typeof minhaIdade)


// array 
let hobbies: string [] = ["Cozinhar", "Ler", "Correr"]
console.log(hobbies[0])
console.log(typeof hobbies)
console.log(hobbies)


// tuplas

let endereco: [string, number] = ["Rua Principal", 99]
console.log(endereco)



// enum - valores pré definidos
enum Cor {
    Amarelo,
    Vermelho,
    Azul
}

let minhaCor: Cor = Cor.Amarelo
console.log(minhaCor)

// any
let carro: any = "BMW"
console.log(carro)
carro = { marca: "BMW", ano: 2019}
console.log(carro)