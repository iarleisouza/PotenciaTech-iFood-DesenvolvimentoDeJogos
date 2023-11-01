const pessoa = {
    nome: "Iarlei Souza",
    idade: 45,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
}

// pessoa.nome = "Roberto"
// pessoa.idade = 32

pessoa.descrever = function () {
    console.log(`Meu nome é ${this.nome}`)
}

pessoa.descrever()

// Acessando dinamicamente valores de um objeto

console.log(pessoa['nome'])

pessoa['nome'] = 'Joao' //dinâmico
pessoa.nome = 'Joao' //acesso direto