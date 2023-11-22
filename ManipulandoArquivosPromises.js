const fs = require('fs')
const path = require('path')

const filepath = path.resolve(__dirname, 'tarefas.csv')

const promesaDaLeituraDoArquivo = fs.promises.readFile(filePath)

promesasDaLeituraDoArquivo
.then((arquivo) => arquivo.toString('utf8'))
.then((textoDoArquivo) => linhasSemOCabecalho.map((linha) => {
    const [nome, feito] = linha.split(';')
    return {
        nome,
        feito: feito.trim() === 'true'
    }

}))
.then((listaDeTarefas) => console.log(listaDeTarefas))
.catch((error) => console.log('Deu ruim!', error))