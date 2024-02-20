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
console.log(typeof numInt === typeof 10);                          


//Verificar se parseFloat("9.8) é igual a 10. Se não, faça ser exatamente igual com 10.
console.log(parseFloat("9.8") === 10);
console.log(parseFloat("9.8") === 9.8);
console.log(parseFloat("10") === 10);

//Verificar se "ão" é encontrado em ambos algodão e jargão.
console.log('algodão'.includes('ão'));
console.log('jargão'.includes('ão'));

//Espero que este curso não tenha muitos jargões. Verifique se jargões está na frase.
console.log('Espero que este curso não tenha muitos jargões.'.includes('jargões'));

//Gerar um número aleatório entre incluindo 0 e 100.
const numero = Math.ceil(Math.random () * 101)
console.log(numero)

//Gerar um número aleatório entre incluindo 50 e 100.
const numero1 = Math.floor(Math.random () * 51) + 50
console.log(numero1)

//Gerar um número aleatório entre incluindo 0 e 255.
const numero2 = Math.ceil(Math.random () * 257)
console.log(numero2)

//Acesse os caracteres da string "JavaScript" usando um número aleatório.
const palavra1 = 'JavaScript' 
let numeroAleatorio = Math.floor(Math.random() * palavra1.length)
console.log(palavra1[numeroAleatorio])

//Use console.log() e caracteres de  imprimir os caracteres no seguinte padrão.
//1 1 1 1 1
//2 1 2 4 8
//3 1 3 9 27
//4 1 4 16 64
//5 1 5 25 125

console.log("1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125")


//Use substr para retirar da frase because because because da seguinte frase: 'You cannot end a sentence with because because because is a conjunction'.
let subtrair = 'You cannot end a sentence with because because because is a conjunction'
console.log(subtrair.substr(31, 23));

//"Amor é a melhor coisa neste mundo. Alguns encontraram seu amor e alguns ainda estão procurando pelo seu amor." Contar o número de palavras amor nesta frase.
let count = "Amor é a melhor coisa neste mundo. Alguns encontraram seu amor e alguns ainda estão procurando pelo seu amor."
console.log(count.match(/amor/g).length)

//Use match() para contar os números de todos os because na seguinte frase: 'You cannot end a sentence with because because because is a conjunction'.
let countBecause = 'You cannot end a sentence with because because because is a conjunction'
console.log(countBecause.match(/because/g).length)

//Limpar o seguinte texto e encontrar a palavra mais repetida (dica, use replace e expressões regulares)
//const frase = " %I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching "
const fraseR = "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching" 
const clearText = fraseR.replace(/[^a-zA-Z\s\d]/g, "").toLowerCase()
console.log({clearText})

//Calcular o total anual de uma pessoa extraindo os números do seguinte texto. "Ele recebe 5000 euros de salário por mês, 10000 euros de bônus anual, 15000 euros de cursos onlines por mês.'.
let salario = "Ele recebe 5000 euros de salário por mês, 10000 euros de bônus anual, 15000 euros de cursos onlines por mês."
let salarioAnual = salario.match(/\d+/g)
let somaSalario = Number(salarioAnual[0]) + Number(salarioAnual[1]) + Number(salarioAnual[2])
console.log(somaSalario)