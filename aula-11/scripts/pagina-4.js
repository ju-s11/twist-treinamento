//aula 11 - dia 29/07/2024 - quarto arquivo javascript.


alert("\t\t\t *** Tabuada *** \n\n\n");

let num = parseInt(prompt("Digite um número inteiro: "));
let result = "\n";
for (let n = 1; n <= 10; n++) {
    console.log(`${n} X ${num} = ${n*num}`);
    //concatenação de string
    result += `${n} X ${num} = ${n*num}\n`;
}

alert(result);