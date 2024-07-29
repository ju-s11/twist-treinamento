//aula 11 - dia 29/07/2024 - segundo arquivo javascript.

let texto = prompt("Digite um texto: ");
alert(typeof texto); //comando typeof: comando que retorna o tipo de uma variável.

let idade = Number(prompt("Digite sua idade: "));
alert(typeof idade);

let verificacao = typeof idade; //==: verifica se os valores de duas variáveis são verdadeiros. mesmo o tipo sendo diferente, o retorno será verdadeiro caso os valores das variáveis sejam iguais.
if (verificacao === 'number') { //objeto. programação orientada objeto.
    idade = parseInt(idade);
}
alert(typeof idade);

//Operador ternário
//formato: (condição)? caso verdade: caso falso;
let op = conform("Você sabe Ruby ?");

let resp = (op)? "Contratado":"Ignorar";
alert(resp);