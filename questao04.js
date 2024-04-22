/*
Exercícios de Operador Ternário:
Questão:  Escreva um código JavaScript utilizando o operador ternário para 
determinar se um número é positivo, negativo ou zero. A variável numero 
contém o valor a ser verificado. Atribua o resultado à variável resultado.
*/

var numero = -5 // ou qualquer outro numero
var resultado = numero > 0 ? "positivo" : (numero < 0 ? "negativo" : "zero");

console.log("O número é " + resultado + ".");