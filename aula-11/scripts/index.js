//aula 11 - dia 29/07/2024 - primeiro arquivo javascript.

/* posso criar variaveis globais usando o comando var 
local/bloco usando o comando let */

let nome = prompt("Digite seu nome: ");
let idade = parseInt(prompt("Digite a idade: "));

// se a  idade for maior que 18
// Entrada livre

if (idade > 18) { //função alert:
    alert(`${nome}, você pode entrar!!!`); //configuração de string para a exibição na tela pelo comando alert.
    let comanda = -1; //100
    let resp = confirm("Deseja beber uma cerveja ?"); //função confirm: função de confirmação. exibe um pop-up na tela para o usuário clicar se ok ou não ok. retorna true ou false (valores booleanos).
    if (resp) {
        comanda -= 20;
        alert(`Saldo atual: ${comanda}`);

        let saida = confirm("Deseja ir embora ?");
        if(saida) {
            if (comanda < 0) {
                alert(`Sua conta ficou: ${comanda}`);
                let pagamento = parseFloat(prompt("Digite o valor pago: ")); //função prompt: exibe um pop-up na tela para o usuário preencher. similar ao input do python.
                let result = comanda + pagamento;
                if (result > 0) {
                    alert(`Seu troco é ${result}`);
                }
                else {
                    if (result < 0) {
                        alert("Você não pagou, vai lavar pratos!");
                    }
                    else {
                        alert(`Pagamento ok, ${nome}. Pode sair.`);
                    } //NÃO USAREMOS (aprenderemos) ELIF OU ELSE IF NO JAVASCRIPT!!!
                }
            }
        }
    }
}
else {
    alert(`${nome}, você está proibido de entrar.`);
}