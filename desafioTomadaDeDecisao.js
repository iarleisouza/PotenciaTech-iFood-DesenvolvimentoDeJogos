// Solicita ao usuário que insira o nome do personagem:
const nomePersonagem = gets();

// Solicita ao usuário que escolha entre "Atacar" ou "Fugir":
const acaoEscolhida = gets();

// TODO: Implemente uma solução utilizando lógica de programação;
//TODO: Verifique a ação escolhida e exibir a mensagem correspondente:
 
 

   
switch(acaoEscolhida) {
  case "Atacar":
  //   print("Elsa Yajin escolheu Atacar!")
       print(nomePersonagem + " escolheu " + acaoEscolhida + "!")
    break
  case "Fugir":
  //   print("Jubileu escolheu Fugir!")
    print(nomePersonagem + " escolheu " + acaoEscolhida + "!")
    break
   case "Correr":
    print("Tente novamente")
    
    
   }