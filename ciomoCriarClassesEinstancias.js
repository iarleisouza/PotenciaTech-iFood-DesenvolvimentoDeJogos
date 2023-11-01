class Pessoa {
    nome;
    idade;

    descrever(){
        console.log(`Meu nome é ${this.nome}`)
    }

}


const vitor = new Pessoa()
vitor.nome = 'Vitor'
vitor.idade = 25

const renan = new Pessoa()
renan.nome = 'Renan'
renan.idade = 30

// console.log(vitor, renan)

vitor.descrever()
renan.descrever()