let nome = prompt("Nome:");
let sobrenome = prompt("Sobrenome");
let estudo = prompt("Campo estudo: ");
let ano_nascimento = Number(prompt("Ano de nascimento: "));

let date = new Date();
const ano_atual = date.getFullYear();
const idade = ano_atual - ano_nascimento;

alert(
  `Nome do recruta ${nome}\nSobrenome: ${sobrenome}\nCampo de estudo: ${estudo}\nIdade: ${idade}`,
);
