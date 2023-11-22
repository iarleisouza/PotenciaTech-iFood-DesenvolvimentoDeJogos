function adicao(x, y){
    return x + y
}

function multiplicacao(x, y) {
    return x * y
}

function calcular(x, operacao, y){
        console.log(operacao(x, y))
}
calcular(10, adicao, 20)
calcular(10, multiplicacao, 20)

// esse exemplo abaixo no DOM é o codico acima só que no console
document.getElementById('btn').addEventListener('click', () => {
    console.log('Clicou')
})