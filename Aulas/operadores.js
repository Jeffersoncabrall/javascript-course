// Aritmeticos + - * / % 
// Agrupamento ()
// Atribuição = += -= *= /= e %=
// Encadeamento
// Incrementar ++ e Decrementar --

let soma = 2 + 2 
let subtração = 2 - 2 
let multiplicação = 2 * 2
let divisão = 2 / 2
let modulo = 8 % 2
console.log(modulo)//0

//No modulo usamos para obter o resto da divisão, veja outro exemplo

let modulo2 = 3 % 2
console.log(modulo2) //1

let agru = (3 + 3) * 5 
console.log(agru) // 30
//Nesse caso os parentes da prioridade na soma entre 3 + 3, mas se não tivesse eles a precedencia iria ser as multiplicação.



let atribuir_nome = "Jefferson";
atribuir_nome += " Cabral"
atribuir_nome += " Silva"
console.log(atribuir_nome)

let atribuir_numeros = 10;
atribuir_numeros += 2 // 12
atribuir_numeros -= 2 // 10
atribuir_numeros *= 5 // 50
atribuir_numeros /= 2 // 25

// O resultado final será 25.

console.log(atribuir_numeros)


let num = 1;
num++
console.log(num) // 2

// No incremento e decremento o valor antes ou depois da variavel importa, se o valor é a++ retorna o valor antes de ser incrementado, ++a retorna o valor depois de ser incrementado.

num--
console.log(num) // 1
