/*
Exercícios de Operador Ternário:
Questão:   Escreva um código JavaScript utilizando o operador ternário para 
determinar se um ano é bissexto. A variável ano contém o ano a ser verificado. 
Atribua o resultado à variável resultado.
*/

const ano = 2024; // Insira o ano que deseja verificar

const resultado = (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0 ? `${ano} é um ano bissexto.` : `${ano} não é um ano bissexto.`;

console.log(resultado);
