function falarMeuNome() {
    console.log('Meu nome é Iarlei')
}

function falarMeuNomeCompleto(falarMeuNome)  { //variavel de parámetro é a funcao acima falarMeuNome()
    falarMeuNome()
    console.log('Iarlei Souza')
}
falarMeuNomeCompleto(falarMeuNome)
falarMeuNomeCompleto(falarMeuNome)()