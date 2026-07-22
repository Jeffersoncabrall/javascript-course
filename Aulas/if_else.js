//Permite criar bloco de código que vão ser executados somente quando uma determinada operação lógica for verdadeira, se a condição for === true ENTÃO  faça algo.
//Além disso pode ser usado com ELSE para acrescentar um bloco que vai ser executado somente quando essa mesma operação lógica for falsa.
// SE condiçao === true ENTÃO faça uma coisa SENÃO  faça outra coisa.

const idade = prompt("Informe a sua idade: ");

// if (6 === 6) {
//   console.log("verdadeiro");
// } else {
//     console.log("falso")
// }

if (idade > 18) {
  alert("Vocé é maior de idade");
} else if (idade > 12) {
  alert("Você é menor de idade");
} else if (idade > 4) {
  alert("Você é criança");
} else {
  alert("Digite uma idade");
}
