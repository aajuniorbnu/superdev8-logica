function exercicio01() {
    let indice = 0;
    while (indice < 5) {
        let nome = prompt("Digite o nome do aluno:");
        alert("Aluno cadastrado: " + nome);
        indice++;
    }
    alert("Cadastro finalizado");
}

function exercicio02() {
    let indice = 0;
    while (indice < 4) {
        let cor = prompt("Digite uma cor:");
        alert("Cor escolhida: " + cor);
        indice++;
    }
    alert("Obrigado por informar suas cores favoritas");
}

function exercicio03() {
    let indice = 0;
    while (indice < 3) {
        let cidade = prompt("Digite o nome da cidade:");
        alert("Destino " + (indice + 1) + ": " + cidade);
        indice++;
    }
    alert("Planejamento de viagem concluído");
}

function exercicio04() {
    let indice = 0;
    let soma = 0;
    while (indice < 5) {
        let numero = parseInt(prompt("Digite um número inteiro:"));
        soma += numero;
        indice++;
    }
    alert("Soma total: " + soma);
}

function exercicio05() {
    let indice = 0;
    while (indice < 3) {
        let filme = prompt("Digite o nome do filme:");
        let ano = prompt("Digite o ano de lançamento:");
        alert("Filme: " + filme + " - Ano: " + ano);
        indice++;
    }
    alert("Lista de filmes cadastrada com sucesso");
}

function exercicio06() {
    let indice = 0;
    let soma = 0;
    let numeros = [];
    
    while (indice < 5) {
        let numero = parseFloat(prompt("Digite um número:"));
        numeros.push(numero);
        soma += numero;
        indice++;
    }
    
    let media = soma / 5;
    alert("Soma dos números: " + soma + "\nMédia: " + media.toFixed(2));
}

function exercicio07() {
    let indice = 0;
    let totalVendas = 0;
    
    while (indice < 6) {
        let venda = parseFloat(prompt("Digite o valor da venda " + (indice + 1) + ":"));
        totalVendas += venda;
        indice++;
    }
    
    let comissao = totalVendas * 0.05;
    alert("Total das vendas: R$ " + totalVendas.toFixed(2) + 
          "\nComissão (5%): R$ " + comissao.toFixed(2));
}

function exercicio08() {
    let indice = 0;
    
    while (indice < 10) {
        let numero = parseInt(prompt("Digite o " + (indice + 1) + "º número:"));
        if (numero % 2 === 0) {
            alert("O número " + numero + " é PAR");
        } else {
            alert("O número " + numero + " é ÍMPAR");
        }
        indice++;
    }
}

function exercicio09() {
    let numero = parseInt(prompt("Digite um número para ver sua tabuada:"));
    let indice = 1;
    
    let mensagem = "";
    while (indice <= 10) {
        mensagem += numero + " x " + indice + " = " + (numero * indice) + "\n";
        indice++;
    }
    alert(mensagem);
}

function exercicio10() {
    let indice = 0;
    let pares = 0;
    let impares = 0;
    
    while (indice < 10) {
        let numero = parseInt(prompt("Digite o " + (indice + 1) + "º número:"));
        if (numero % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
        indice++;
    }
    
    alert("Quantidade de números pares: " + pares + 
          "\nQuantidade de números ímpares: " + impares);
}
