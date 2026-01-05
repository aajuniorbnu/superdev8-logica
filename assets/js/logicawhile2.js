

function executar() {
    const opcao = document.getElementById("exercicio").value;

    switch (opcao) {
        case "01": exercicio01(); break;
        case "02": exercicio02(); break;
        case "03": exercicio03(); break;
        case "04": exercicio04(); break;
        case "05": exercicio05(); break;
        case "06": exercicio06(); break;
        case "07": exercicio07(); break;
        case "08": exercicio08(); break;
        case "09": exercicio09(); break;
        case "10": exercicio10(); break;
        case "11": exercicio11(); break;
        case "12": exercicio12(); break;
        case "13": exercicio13(); break;
        case "14": exercicio14(); break;
        case "15": exercicio15(); break;
        case "16": exercicio16(); break;
        case "17": exercicio17(); break;
        case "18": exercicio18(); break;
        case "19": exercicio19(); break;
        case "20": exercicio20(); break;
        default:
            alert("Selecione um exercício!");
    }
}

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

function exercicio11() {
    let soma = 0;
    let i = 1;

    while (i <= 4) {
        soma += Number(prompt("Digite a nota " + i));
        i++;
    }

    let media = soma / 4;
    let resultado = media >= 7 ? "Aprovado" : "Reprovado";

    alert("Média: " + media.toFixed(2) + "\n" + resultado);
}

function exercicio12() {
    let total = 0;
    let i = 1;

    while (i <= 5) {
        total += Number(prompt("Valor do produto " + i));
        i++;
    }

    let desconto = total > 200 ? total * 0.10 : 0;
    let final = total - desconto;

    alert(
        "Total sem desconto: R$ " + total.toFixed(2) +
        "\nDesconto: R$ " + desconto.toFixed(2) +
        "\nTotal final: R$ " + final.toFixed(2)
    );
}

function exercicio13() {
    let soma = 0;
    let i = 1;

    while (i <= 6) {
        soma += Number(prompt("Digite a idade " + i));
        i++;
    }

    let media = soma / 6;
    let msg = media >= 18 ? "Maior de idade" : "Menor de idade";

    alert("Média das idades: " + media.toFixed(2) + "\n" + msg);
}

function exercicio14() {
    let i = 1;
    let soma = 0;
    let maior = 0;
    let menor = Number.MAX_VALUE;

    while (i <= 5) {
        let salario = Number(prompt("Digite o salário " + i));
        soma += salario;

        if (salario > maior) maior = salario;
        if (salario < menor) menor = salario;

        i++;
    }

    let media = soma / 5;
    let msg = media > 3000 ? "Salários acima da média" : "Salários dentro da média";

    alert(
        "Maior salário: R$ " + maior.toFixed(2) +
        "\nMenor salário: R$ " + menor.toFixed(2) +
        "\nMédia: R$ " + media.toFixed(2) +
        "\n" + msg
    );
}

function exercicio15() {
    let total = 0;
    let i = 1;

    while (i <= 4) {
        total += Number(prompt("Digite o valor da conta " + i));
        i++;
    }

    let renda = Number(prompt("Digite sua renda mensal"));
    let percentual = (total / renda) * 100;

    let msg = percentual > 50 ? "Orçamento comprometido" : "Orçamento saudável";

    alert(
        "Total das contas: R$ " + total.toFixed(2) +
        "\nPercentual da renda: " + percentual.toFixed(2) + "%" +
        "\n" + msg
    );
}

function exercicio16() {
    let i = 1;
    let maior = 0;

    while (i <= 5) {
        let altura = Number(prompt("Digite a altura da pessoa " + i));
        if (altura > maior) maior = altura;
        i++;
    }

    alert("Maior altura: " + maior + " m");
}

function exercicio17() {
    let i = 1;
    let menor = Number.MAX_VALUE;

    while (i <= 4) {
        let peso = Number(prompt("Digite o peso da pessoa " + i));
        if (peso < menor) menor = peso;
        i++;
    }

    alert("Menor peso: " + menor + " kg");
}

function exercicio18() {
    let i = 1;
    let maiorIdade = 0;
    let nomeMaior = "";

    while (i <= 5) {
        let nome = prompt("Nome da pessoa " + i);
        let idade = Number(prompt("Idade de " + nome));

        if (idade > maiorIdade) {
            maiorIdade = idade;
            nomeMaior = nome;
        }
        i++;
    }

    alert("Pessoa mais velha: " + nomeMaior + " (" + maiorIdade + " anos)");
}

function exercicio19() {
    let i = 1;
    let maior = 0;
    let menor = Number.MAX_VALUE;

    while (i <= 6) {
        let preco = Number(prompt("Preço do produto " + i));
        if (preco > maior) maior = preco;
        if (preco < menor) menor = preco;
        i++;
    }

    alert("Maior preço: R$ " + maior.toFixed(2) +
        "\nMenor preço: R$ " + menor.toFixed(2));
}

function exercicio20() {
    let i = 1;
    let maiorSalario = 0;
    let nomeMaior = "";

    while (i <= 4) {
        let nome = prompt("Nome do colaborador " + i);
        let salario = Number(prompt("Salário de " + nome));

        if (salario > maiorSalario) {
            maiorSalario = salario;
            nomeMaior = nome;
        }
        i++;
    }

    alert("Colaborador com maior salário: " + nomeMaior +
        "\nSalário: R$ " + maiorSalario.toFixed(2));
}