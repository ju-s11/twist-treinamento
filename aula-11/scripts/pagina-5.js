//aula 11 - dia 29/07/2024 - quinto arquivo javascript.

//Laço de repetição condicional
//while: verifica antes de fazer
//do/while: faz antes de verificar

let num = 11;

alert("\t\t\t *** Acerte o número *** \n\n" + "O número está entre 1 e 15");

dado = -1;

while (dado != num) {
    dado = parseInt(prompt("Digite o número: "));
    if (dado != num) {
        alert("Você errou!!! Tente novamente...");
    }
}
alert("Você acertou! Parabéns!!!");