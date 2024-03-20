//Obtenha a entrada do usuário usando prompt("Digite sua idade:"). Se o usuário tiver 18 anos ou mais, dê o feedback:
// 'Você tem idade suficiente para dirigir', mas se não tiver 18 anos, dê outro feedback informando para esperar o número de anos 
//que ele precisa para completar 18 anos.
console.log("%c Exercício 1", "color: #FF0000")
let idade = prompt("Digite sua idade:")
if (idade >= 18) {
  console.log("Você tem idade suficiente para dirigir")
} else {
    let anosFaltam = 18 - idade
    console.log("Você precisa esperar " + anosFaltam + " anos para dirigir")
    }
//Compare os valores de myAge e yourAge usando if … else. Com base na comparação, registre o resultado no console indicando 
//quem é mais velho (eu ou você). Use prompt(“Digite sua idade:”) para obter a idade como entrada.
console.log("%c Exercício 2", "color: #FF0000")
let myAge = 26
let yourAge = prompt("Digite sua idade:")

if (myAge >= yourAge){
  console.log("Eu sou mais velho que você.")

} else {
  console.log("Você é mais novo que eu.")
}

//Se a for maior que b, retorne 'a é maior que b' senão 'a é menor que b'. Tente implementar de duas maneiras
//usando if else
//operador ternário.
console.log("%c Exercício 3", "color: #FF0000")
let a = 4;
let b = 3;

if(a>=b){
  console.log("a é maior que b.")
}else{
  console.log("b é maior que a.")
}

let condicao = a>=b

condicao ? console.log("a é maior que b") : console.log("b é maior que a")

let resultado = condicao ? true : false


//Números pares são divisíveis por 2 e o resto é zero. Como você verifica se um número é par ou não usando JavaScript?
//Digite um número: 2
//2 é um número par

//Digite um número: 9
//9 é um número ímpar.
console.log("%c Exercício 4", "color: #FF0000")
let numeroUsuario = prompt("Digite um número para descorir se é par:")

if(numeroUsuario%2 === 0){
  console.log("É um número par")
}else{
  console.log("Não é um número ímpar")
}

//Escreva um código que possa dar notas aos alunos de acordo com suas pontuações:
//80-100, A
//70-89, B
//60-69, C
//50-59, D
//0-49, F
console.log("%c Exercício 5", "color: #FF0000")
let notaAluno = prompt("Digite sua nota:")

if(notaAluno >= 90 && notaAluno <= 100){
  console.log("A")
} else if(notaAluno >= 70 && notaAluno <= 89){
  console.log("B")
}else if(notaAluno >= 60 && notaAluno <= 69){
  console.log("C")
} else if(notaAluno >= 50 && notaAluno <= 59){
  console.log("D")
} else if(notaAluno >= 0 && notaAluno <= 49){
  console.log("F")
} else{
  console.log("Digite uma nota válida")
}




