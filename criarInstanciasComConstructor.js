class pessoa {
    nome
    idade
    anoDeNascimento

    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
        this.anoDeNascimento = 2023 - idade
        
    }
        descrever() {
            console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
        }
}

const vitor = new pessoa('vitor', 25)
const renan = new pessoa('Renan', 30)

console.log(vitor)