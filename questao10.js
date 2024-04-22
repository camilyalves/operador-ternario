/*
Exercícios de Operador Ternário:
Questão:   Escreva um código JavaScript utilizando o operador ternário para 
determinar se uma pessoa pode entrar em um clube. A variável idade contém 
a idade da pessoa e a variável temConvite indica se ela possui um convite. 
Atribua o resultado à variável status. 
*/

const idade = 25; // Insira a idade da pessoa
const temConvite = true; // Insira true se a pessoa tiver um convite, caso contrário, insira false

const status = idade >= 18 && temConvite ? "Pode entrar no clube." : "Não pode entrar no clube.";

console.log(status);
