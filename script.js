/*1. Escreva um algoritmo que pergunte ao usuário se ele está com fome e se ele tem
dinheiro, guarde as respostas separadamente. Com base nas respostas do usuário:
a. Se ele estiver com fome E com dinheiro, exiba uma mensagem
recomendando uma lanchonete.
b. Se não estiver com fome OU não tiver dinheiro, exiba uma mensagem
informando que é melhor ele comer em casa.*/

var situacao = prompt("Voce esta com fome? Se sim, digite 1")
var dinheiro = prompt("Voce tem dinheiro? Se sim, digite 1")

if(situacao == 1 && dinheiro == 1){
    console.log("Va ate uma lanchonete")
}

if(situacao != 1 || dinheiro != 1){
    console.log("A melhor opcao e comer em casa")
}