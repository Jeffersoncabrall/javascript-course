const valor1 = Number(prompt(`Digite um número: `));
const valor2 = Number(prompt(`Digite outro número: `));
const operacao = prompt("Digite uma operação: + - * / ");
let conta;

switch (operacao) {
  case "+":
    conta = valor1 + valor2;
    alert(conta);
    break;
  case "-":
    conta = valor1 - valor2;
    alert(conta);
    break;
  case "*":
    conta = valor1 * valor2;
    alert(conta);
    break;
  case "/":
    if (valor1 == 0) {
      alert("Não da para realizar operação");
    } else {
      conta = valor1 / valor2;
      alert(conta);
    }
  default:
    alert("Conta Não realizada");
}
