//Exercícios: Level 1
//Declare uma variável chamada desafio e atribua a ela um valor inicial '30 Dias de JavaScript'.
let desafio = '30 Dias de JavaScript';

//Imprimir uma string no console do browser usando console.log() .
let string = 'oi'
console.log(string);

//Imprimir o length da string no console do browser usando o console.log().
console.log(string.length);

//Troque todos os caracteres da string para letras maiúsculas usando o método toUpperCase().
console.log(string.toUpperCase());

//Troque todos os caracteres da string para letras minúsculas usando o método toLowerCase().
console.log(string.toLowerCase());

//Retirar (Slice) a primeira letra da string usando os métodos substr() ou substring().
console.log(string.substr(1));

//Dividir a frase Days Of JavaScript de 30 Days Of JavaScript.
console.log(desafio.split(' '));

//Verificar se a string contém a palavra Script usando o método includes().
console.log(desafio.includes('Script'));

//Separar a string em um array usando o método split().
console.log(desafio.split(''));

//Separar a string 30 Dias de JavaScript com espaços usando o método split().
console.log(desafio.split(' '));

//"Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon" split a string com vírgulas e mude-a para um array.
let empresas = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(empresas.split(','));

//Mude 30 Dias de JavaScript para 30 Dias de Python usando o método replace().
console.log(desafio.replace('JavaScript', 'Python'));

//Qual é o caractere no index 15 em "30 Dias de JavaScript' string? Use o método charAt().
console.log(desafio.charAt(15));

//Qual é o código do caractere de J em "30 Dias de JavaScript" string usando o método charCodeAt().
console.log(desafio.charCodeAt(11));

//Use indexOf para determinar a posição da primeira ocorrência de a em 30 Dias de JavaScript.
console.log(desafio.indexOf('a'));

//Use lastIndexOf para determinar a posição da última ocorrência de a em 30 Dias de JavaScript.
console.log(desafio.lastIndexOf('a'));

//Use indexOf para encontrar a posição da primeira ocorrência da palavra because na seguinte frase:'You cannot end a sentence with because because because is a conjunction'.
let frase = 'You cannot end a sentence with because because because is a conjunction';
console.log(frase.indexOf('because'));

//Use lastIndexOf para encontrar a posição da última ocorrência da palavra because na seguinte frase:'You cannot end a sentence with because because because is a conjunction'.
console.log(frase.lastIndexOf('because'));

//Use search para encontrar a posição da primeira ocorrência da palavra because na seguinte frase:'You cannot end a sentence with because because because is a conjunction'.
console.log(frase.search('because'));

//Use trim() para remover qualquer espaço adicional no início e no final da string .E.g " 30 Dias de JavaScript ".
console.log(desafio.trim());

//Use startsWith() com a string 30 Dias De JavaScript e faça o resultado ser verdadeiro.
console.log(desafio.startsWith('30'));

//Use endsWith() com a string 30 Dias De JavaScript e faça o resultado ser verdadeiro.
console.log(desafio.endsWith('JavaScript'));

//Use match() para encontrar todos os a's em 30 Dias De JavaScript.
console.log(desafio.match(/a/g))

//Use concat() para unir "30 Dias de" e "JavaScript" para uma única string, "30 Dias de JavaScript".
console.log('30 Dias de '.concat('JavaScript'));


//Use repeat() para imprimir 30 Dias De JavaScript 2 vezes.
console.log(desafio.repeat(2));

