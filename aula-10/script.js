//aula 10 - dia 26/07/2024 - primeiro arquivo javascript.

//Comentário de uma linha em Javascript


/*

    comentario de varias linhas
    em JS

*/

let alt, larg, conf;
alt = parseFloat(prompt("Digite a altura: "));
larg = parseFloat(prompt("Digite a largura: "));
conf = confirm("Deseja continuar ?");
console.log(alt, larg, conf);
alert(`${alt} * ${larg} = ${alt*larg}`);