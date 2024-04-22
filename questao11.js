/*
Exercícios de Operador Ternário:
Questão:   Escreva um código JavaScript utilizando o operador ternário para 
determinar se uma pessoa é um bebê, criança, adolescente, adulto ou idoso. A 
variável idade contém a idade da pessoa. Atribua o resultado à variável 
categoria 
*/

// idade da pessoa
var idade = 25;

// categoria com base na idade
var categoria = idade < 1 ? "Bebê" :
                idade < 13 ? "Criança" :
                idade < 18 ? "Adolescente" :
                idade < 60 ? "Adulto" :
                "Idoso";

// categoria
console.log("A categoria da pessoa é: " + categoria);