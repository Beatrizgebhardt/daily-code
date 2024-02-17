//Exercícios: Level 2
//Usando o console.log() imprimir a seguinte citação:
//  "Não há exercício melhor para o coração que ir lá em baixo e levantar as pessoas" by John Holmes nos ensina a ajudar outras pessoas.
console.log('"Não há exercício melhor para o coração que ir lá em baixo e levantar as pessoas" by John Holmes nos ensina a ajudar outras pessoas.');

//Usando o console.log() imprimir a seguinte citação de Madre Teresa:
//  "O amor não é paternalista e a caridade não tem a ver com pena, tem a ver com amor. Caridade e amor são a mesma coisa – com a caridade você dá amor, então não dê apenas dinheiro, mas estenda sua mão."
console.log('"O amor não é paternalista e a caridade não tem a ver com pena, tem a ver com amor. Caridade e amor são a mesma coisa – com a caridade você dá amor, então não dê apenas dinheiro, mas estenda sua mão."');

//Verificar se typeOf "10" é exatamente igual a 10. Se não, faça ser exatamente igual.
let nums = "10"
let numInt = parseInt(nums)
console.log(numInt)
console.log(typeof "10" === 10);


//Verificar se parseFloat("9.8) é igual a 10. Se não, faça ser exatamente igual com 10.
console.log(parseFloat("9.8") === 10);
console.log(parseFloat("9.8") === 9.8);

//Verificar se "ão" é encontrado em ambos algodão e jargão.
console.log('algodão'.includes('ão'));
console.log('jargão'.includes('ão'));

//Espero que este curso não tenha muitos jargões. Verifique se jargões está na frase.
console.log('Espero que este curso não tenha muitos jargões.'.includes('jargões'));

//Gerar um número aleatório entre incluindo 0 e 100.
const numero = Math.floor(Math.random () * 101)
console.log(numero)

//Gerar um número aleatório entre incluindo 50 e 100.
const numero1 = Math.floor(Math.random () * 51) + 50
console.log(numero1)

//Gerar um número aleatório entre incluindo 0 e 255.
const numero2 = Math.floor(Math.random () * 256)
console.log(numero2)

//Acesse os caracteres da string "JavaScript" usando um número aleatório.

//Use console.log() e imprimir os caracteres no seguinte padrão.
//1 1 1 1 1
//2 1 2 4 8
//3 1 3 9 27
//4 1 4 16 64
//5 1 5 25 125


//Use substr para retirar da frase because because because da seguinte frase: 'You cannot end a sentence with because because because is a conjunction'.