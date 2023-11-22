
/*
Exemplo de função de uso com metodo Math.floor e o parseInt

function numero() {
    //const numero = Math.floor(Math.random() * 100)
    const numero = parseInt(Math.random() * 100)
    console.log(numero)
  }
numero()



*/

/*
const promessasDeUmNumeroQualquer = new Promise((resolve, reject) => {
    const numero = parseInt(Math.random() * 100)
    resolve(numero)
})

promessasDeUmNumeroQualquer
.then((value) => {
    console.log(value)
}) 

 .catch((error) => {
    console.error(error)
}) 
 .finally(() => {
    console.log('Finalizou!')
 }) 
*/

 const promessasDeUmNumeroQualquer = new Promise((resolve, reject) => {
 setTimeout(() => {
    const numero = parseInt(Math.random() * 100)
    resolve(numero)
 }, 1000)

})

console.log('Vai filhão!')

promessasDeUmNumeroQualquer
.then((value) => {
    console.log(value)
    return value + 10
        
    })
    .then((value) => {
        console.log(value)
            
        })
 .catch((error) => {
    console.error(error)
 })   
  .finally(() => {
    console.log('Finalizou')
  })
