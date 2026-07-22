//Uma variavel é uma forma de guardarmos um valor dentro dela e poder reutiliza-lá no código.

// Temos o var, let e const 
// Var não se usa foi descontinuado, o let entrou no lugar do var tambem pode ser atribuido porém se estiver dentro do escopo fica inapropriado reatribuir. Já o const não pode ser reatribuido, cria um valor constante não muda.

var linguagem = "Javascript"


var idade;
console.log(idade) //undefined
 
//Reatribuindo a variavel.

idade = 32;
console.log(idade) //32

let nome = "Cabral"

const sobrenome = "Silva"
sobrenome = "Cabral"
console.log(sobrenome) // Uncaught TypeError: Assignment to constant variable.



