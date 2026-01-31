

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
        case "21": exercicio01(); break;
        case "22": exercicio02(); break;
        case "23": exercicio03(); break;
        case "24": exercicio04(); break;
        case "25": exercicio05(); break;
        case "26": exercicio06(); break;
        case "27": exercicio07(); break;
        case "28": exercicio08(); break;
        case "29": exercicio09(); break;
        case "30": exercicio10(); break;
        case "31": exercicio11(); break;
        case "32": exercicio12(); break;
        case "33": exercicio13(); break;
        case "34": exercicio14(); break;
        case "35": exercicio15(); break;
        case "36": exercicio16(); break;
        case "37": exercicio17(); break;
        case "38": exercicio18(); break;
        case "39": exercicio19(); break;
        case "40": exercicio20(); break;
        case "41": exercicio11(); break;
        case "42": exercicio12(); break;
        case "43": exercicio13(); break;
        case "44": exercicio14(); break;
        case "45": exercicio15(); break;
        case "46": exercicio16(); break;
        case "47": exercicio17(); break;
        case "48": exercicio18(); break;
        case "49": exercicio19(); break;
        case "50": exercicio20(); break;
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
function exercicio21() {
    let indice = 0;
    let maior = -Infinity;
    let menor = Infinity;
    while (indice < 7) {
        let temp = parseFloat(prompt('Temperatura dia ' + (indice + 1) + ' (°C):'));
        if (temp > maior) maior = temp;
        if (temp < menor) menor = temp;
        indice++;
    }
    alert('Maior temperatura: ' + maior + '°C\nMenor temperatura: ' + menor + '°C');
}

function exercicio22() {
    let indice = 0;
    let menorPreco = Infinity;
    let nomeMenor = '';
    while (indice < 5) {
        let nome = prompt('Nome produto ' + (indice + 1) + ':');
        let preco = parseFloat(prompt('Preço:'));
        if (preco < menorPreco) {
            menorPreco = preco;
            nomeMenor = nome;
        }
        indice++;
    }
    alert('Produto mais barato: ' + nomeMenor + '\nPreço: R$ ' + menorPreco.toFixed(2));
}


function exercicio23() {
    let indice = 0;
    let criancas = 0, adols = 0, adultos = 0, idosos = 0;
    while (indice < 8) {
        let idade = parseInt(prompt('Idade pessoa ' + (indice + 1) + ':'));
        if (idade < 12) criancas++;
        else if (idade <= 17) adols++;
        else if (idade <= 59) adultos++;
        else idosos++;
        indice++;
    }
    alert('Crianças (<12): ' + criancas + '\nAdolescentes (12-17): ' + adols + '\nAdultos (18-59): ' + adultos + '\nIdosos (60+): ' + idosos);
}


function exercicio24() {
    let indice = 0;
    let reprov = 0, rec = 0, aprov = 0;
    while (indice < 10) {
        let nota = parseFloat(prompt('Nota aluno ' + (indice + 1) + ':'));
        if (nota < 5) reprov++;
        else if (nota < 7) rec++;
        else aprov++;
        indice++;
    }
    alert('Reprovados: ' + reprov + '\nRecuperação: ' + rec + '\nAprovados: ' + aprov);
}


function exercicio25() {
    let indice = 0;
    let ate2k = 0, ate5k = 0, acima5k = 0;
    while (indice < 7) {
        let salario = parseFloat(prompt('Salário colaborador ' + (indice + 1) + ':'));
        if (salario <= 2000) ate2k++;
        else if (salario <= 5000) ate5k++;
        else acima5k++;
        indice++;
    }
    alert('Até R$2000: ' + ate2k + '\nR$2001-5000: ' + ate5k + '\nAcima R$5000: ' + acima5k);
}


function exercicio26() {
    let indice = 0;
    let frios = 0, agrad = 0, quentes = 0;
    while (indice < 6) {
        let temp = parseFloat(prompt('Temperatura dia ' + (indice + 1) + ':'));
        if (temp < 15) frios++;
        else if (temp <= 25) agrad++;
        else quentes++;
        indice++;
    }
    alert('Frios (<15°C): ' + frios + '\nAgradáveis (15-25): ' + agrad + '\nQuentes (>25): ' + quentes);
}

function exercicio27() {
    let indice = 0;
    let ruim = 0, regular = 0, bom = 0;
    while (indice < 10) {
        let aval = parseInt(prompt('Avaliação cliente ' + (indice + 1) + ' (1-5):'));
        if (aval <= 2) ruim++;
        else if (aval === 3) regular++;
        else bom++;
        indice++;
    }
    alert('Ruim (1-2): ' + ruim + '\nRegular (3): ' + regular + '\nBom (4-5): ' + bom);
}


function exercicio28() {
    let indice = 0;
    let neg = 0, zero = 0, pos = 0;
    while (indice < 8) {
        let num = parseInt(prompt('Número inteiro ' + (indice + 1) + ':'));
        if (num < 0) neg++;
        else if (num === 0) zero++;
        else pos++;
        indice++;
    }
    alert('Negativos: ' + neg + '\nZeros: ' + zero + '\nPositivos: ' + pos);
}


function exercicio29() {
    let indice = 0;
    let leves = 0, medias = 0, pesadas = 0;
    while (indice < 5) {
        let peso = parseFloat(prompt('Peso encomenda ' + (indice + 1) + ' (kg):'));
        if (peso < 2) leves++;
        else if (peso <= 10) medias++;
        else pesadas++;
        indice++;
    }
    alert('Leves (<2kg): ' + leves + '\nMédias (2-10kg): ' + medias + '\nPesadas (>10kg): ' + pesadas);
}


function exercicio30() {
    let qtd = parseInt(prompt('Quantas pelúcias cadastrar?'));
    let indice = 0;
    let mickey = 0, minnie = 0, donald = 0;
    while (indice < qtd) {
        let perso = prompt('Personagem [MICKEY/MINNIE/DONALD]:').toUpperCase();
        if (perso === 'MICKEY') mickey++;
        else if (perso === 'MINNIE') minnie++;
        else if (perso === 'DONALD') donald++;
        indice++;
    }
    alert('Mickey: ' + mickey + '\nMinnie: ' + minnie + '\nDonald: ' + donald);
}


function exercicio31() {
    let qtd = parseInt(prompt('Quantos clientes na pesquisa?'));
    let indice = 0;
    let credito = 0, debito = 0, dinheiro = 0;
    while (indice < qtd) {
        let forma = prompt('Forma [CRÉDITO/DÉBITO/DINHEIRO]:').toUpperCase();
        if (forma === 'CRÉDITO') credito++;
        else if (forma === 'DÉBITO') debito++;
        else if (forma === 'DINHEIRO') dinheiro++;
        indice++;
    }
    alert('Crédito: ' + credito + '\nDébito: ' + debito + '\nDinheiro: ' + dinheiro);
}


function exercicio32() {
    let qtd = parseInt(prompt('Quantos ingressos vendidos?'));
    let indice = 0;
    let inteira = 0, meia = 0, cortesia = 0;
    while (indice < qtd) {
        let tipo = prompt('Tipo [INTEIRA/MEIA/CORTESIA]:').toUpperCase();
        if (tipo === 'INTEIRA') inteira++;
        else if (tipo === 'MEIA') meia++;
        else if (tipo === 'CORTESIA') cortesia++;
        indice++;
    }
    alert('Inteira: ' + inteira + '\nMeia: ' + meia + '\nCortesia: ' + cortesia);
}


function exercicio33() {
    let qtd = parseInt(prompt('Quantos lanches vendidos?'));
    let indice = 0;
    let hamb = 0, pizza = 0, hotdog = 0;
    while (indice < qtd) {
        let tipo = prompt('Tipo [HAMBURGUER/PIZZA/HOTDOG]:').toUpperCase();
        if (tipo === 'HAMBURGUER') hamb++;
        else if (tipo === 'PIZZA') pizza++;
        else if (tipo === 'HOTDOG') hotdog++;
        indice++;
    }
    alert('Hambúrguer: ' + hamb + '\nPizza: ' + pizza + '\nHotdog: ' + hotdog);
}


function exercicio34() {
    let qtd = parseInt(prompt('Quantos livros cadastrar?'));
    let indice = 0;
    let ficcao = 0, estudo = 0, infantil = 0;
    while (indice < qtd) {
        let cat = prompt('Categoria [FICÇÃO/ESTUDO/INFANTIL]:').toUpperCase();
        if (cat === 'FICÇÃO') ficcao++;
        else if (cat === 'ESTUDO') estudo++;
        else if (cat === 'INFANTIL') infantil++;
        indice++;
    }
    alert('Ficção: ' + ficcao + '\nEstudo: ' + estudo + '\nInfantil: ' + infantil);
}


function exercicio35() {
    let cont = 0;
    let nome;
    while ((nome = prompt('Nome personagem anime (sair para parar):')) !== 'SAIR') {
        if (nome) {
            alert('Personagem cadastrado: ' + nome);
            cont++;
        }
    }
    alert('Total personagens: ' + cont);
}

function exercicio36() {
    let cont = 0, rpg = 0;
    let nome, genero;
    while ((nome = prompt('Nome jogo (sair para parar):')) !== 'SAIR') {
        if (nome) {
            genero = prompt('Gênero (digite RPG se for)?').toUpperCase();
            alert('Jogo cadastrado: ' + nome);
            cont++;
            if (genero === 'RPG') rpg++;
        }
    }
    alert('Total jogos: ' + cont + '\nRPG: ' + rpg);
}


function exercicio37() {
    let baixo = 0, medio = 0, alto = 0;
    let nome, nivel;
    while ((nome = prompt('Nome herói Marvel (sair para parar):')) !== 'SAIR') {
        if (nome) {
            nivel = prompt('Nível [BAIXO/MEDIO/ALTO]:').toUpperCase();
            alert('Herói: ' + nome + ' - ' + nivel);
            if (nivel === 'BAIXO') baixo++;
            else if (nivel === 'MEDIO') medio++;
            else if (nivel === 'ALTO') alto++;
        }
    }
    alert('Baixo: ' + baixo + '\nMédio: ' + medio + '\nAlto: ' + alto);
}

function exercicio38() {
    let cont = 0, soma = 0;
    let nome, nota;
    while ((nome = prompt('Nome série geek (sair para parar):')) !== 'SAIR') {
        if (nome) {
            nota = parseFloat(prompt('Nota (0-10):'));
            alert('Série: ' + nome + ' - Nota: ' + nota);
            soma += nota;
            cont++;
        }
    }
    let media = cont > 0 ? (soma / cont).toFixed(2) : 0;
    alert('Séries: ' + cont + '\nMédia notas: ' + media);
}

function exercicio39() {
    let cont = 0, jogados = 0;
    let nome, jogou;
    while ((nome = prompt('Console/jogo retrô (sair para parar):')) !== 'SAIR') {
        if (nome) {
            jogou = prompt('Já jogou? [SIM/NÃO]').toUpperCase();
            alert(nome + ': ' + jogou);
            cont++;
            if (jogou === 'SIM') jogados++;
        }
    }
    alert('Itens: ' + cont + '\nJogados: ' + jogados);
}

function exercicio40() {
    let dist = parseFloat(prompt('Distância percorrida (km):'));
    let cons = parseFloat(prompt('Consumo (litros):'));
    let opcao;
    while ((opcao = prompt('1-Consumo médio\n2-Custo viagem\n3-Alterar dist\n4-Alterar cons\n10-Sair')) !== '10') {
        switch (opcao) {
            case '1':
                alert('Consumo médio: ' + (dist / cons).toFixed(2) + ' km/l');
                break;
            case '2':
                let precoLitro = parseFloat(prompt('Preço litro (R$):'));
                alert('Custo: R$ ' + ((dist / cons) * precoLitro).toFixed(2));
                break;
            case '3':
                dist = parseFloat(prompt('Nova distância:'));
                break;
            case '4':
                cons = parseFloat(prompt('Novo consumo:'));
                break;
            default:
                alert('Opção inválida!');
        }
    }
}

function exercicio41() {
    let saldo = parseFloat(prompt('Saldo inicial (R$):'));
    let opcao;
    while ((opcao = prompt('1-Depositar\n2-Sacar\n3-Saldo\n10-Sair')) !== '10') {
        switch (opcao) {
            case '1':
                let dep = parseFloat(prompt('Valor depósito:'));
                saldo += dep;
                alert('Novo saldo: R$ ' + saldo.toFixed(2));
                break;
            case '2':
                let sac = parseFloat(prompt('Valor saque:'));
                if (sac <= saldo) {
                    saldo -= sac;
                    alert('Saque OK. Saldo: R$ ' + saldo.toFixed(2));
                } else {
                    alert('Saldo insuficiente!');
                }
                break;
            case '3':
                alert('Saldo: R$ ' + saldo.toFixed(2));
                break;
            default:
                alert('Opção inválida!');
        }
    }
    alert('Saldo final: R$ ' + saldo.toFixed(2));
}


function exercicio42() {
    let opcao;
    while ((opcao = prompt('1-Celsius→Fahrenheit\n2-Fahrenheit→Celsius\n10-Sair')) !== '10') {
        let temperatura; 
        switch (opcao) {
            case '1':
                temperatura = parseFloat(prompt('Temperatura Celsius:'));
                alert(temperatura + '°C = ' + ((temperatura * 9/5) + 32).toFixed(2) + '°F');
                break;
            case '2':
                tempetarura = parseFloat(prompt('Temperatura Fahrenheit:'));
                alert(temperatura+ '°F = ' + ((temperatura - 32) * 5/9).toFixed(2) + '°C');
                break;
            default:
                alert('Opção inválida!');
        }
    }
}


function exercicio43() {
    let opcao;
    while ((opcao = prompt('1-Calcular IMC\n2-Instruções\n10-Sair')) !== '10') {
        switch (opcao) {
            case '1':
                let peso = parseFloat(prompt('Peso (kg):'));
                let altura = parseFloat(prompt('Altura (m):'));
                let imc = peso / (altura * altura);
                alert('IMC: ' + imc.toFixed(2));
                break;
            case '2':
                alert('IMC = peso / (altura²)\nClassificação:\n<18.5 Abaixo\n18.5-24.9 Normal\n>25 Acima');
                break;
            default:
                alert('Opção inválida!');
        }
    }
}

function exercicio44() {
    let estoque = 0;
    let opcao;
    while ((opcao = prompt('1-Adicionar\n2-Remover\n3-Consultar\n10-Sair')) !== '10') {
        switch (opcao) {
            case '1':
                let add = parseInt(prompt('Qtd adicionar:'));
                estoque += add;
                alert('Estoque: ' + estoque);
                break;
            case '2':
                let rem = parseInt(prompt('Qtd remover:'));
                if (rem <= estoque) {
                    estoque -= rem;
                    alert('Estoque: ' + estoque);
                } else {
                    alert('Estoque insuficiente!');
                }
                break;
            case '3':
                alert('Estoque atual: ' + estoque);
                break;
            default:
                alert('Opção inválida!');
        }
    }
    alert('Estoque final: ' + estoque);
}


function exercicio45() {
    let total = 0;
    let opcao;
    while ((opcao = prompt('1-Hambúrguer R$15\n2-Pizza R$25\n3-Refri R$8\n4-Total\n10-Finalizar')) !== '10') {
        switch (opcao) {
            case '1':
                total += 15;
                alert('Adicionado hambúrguer');
                break;
            case '2':
                total += 25;
                alert('Adicionada pizza');
                break;
            case '3':
                total += 8;
                alert('Adicionado refri');
                break;
            case '4':
                alert('Total parcial: R$ ' + total.toFixed(2));
                break;
            default:
                alert('Opção inválida!');
        }
    }
    alert('Pedido final: R$ ' + total.toFixed(2));
}

function exercicio46() {
    let notas = [];
    let opcao;
    while ((opcao = prompt('1-Cadastrar nota\n2-Média\n3-Qtd notas\n10-Sair')) !== '10') {
        switch (opcao) {
            case '1':
                let nota = parseFloat(prompt('Nota:'));
                notas.push(nota);
                alert('Nota cadastrada!');
                break;
            case '2':
                let media = notas.length > 0 ? (notas.reduce((a,b)=>a+b)/notas.length).toFixed(2) : 0;
                alert('Média: ' + media);
                break;
            case '3':
                alert('Notas cadastradas: ' + notas.length);
                break;
            default:
                alert('Opção inválida!');
        }
    }
}


function exercicio47() {
    let ruim = 0, regular = 0, bom = 0;
    let opcao;
    while ((opcao = prompt('1-Ruim\n2-Regular\n3-Bom\n4-Resumo\n10-Encerrar')) !== '10') {
        switch (opcao) {
            case '1': ruim++; alert('Ruim registrado'); break;
            case '2': regular++; alert('Regular registrado'); break;
            case '3': bom++; alert('Bom registrado'); break;
            case '4':
                alert('Ruim: ' + ruim + '\nRegular: ' + regular + '\nBom: ' + bom);
                break;
            default: alert('Opção inválida!');
        }
    }
    alert('Pesquisa encerrada!\nRuim: ' + ruim + '\nRegular: ' + regular + '\nBom: ' + bom);
}

function exercicio48() {
    let vendas = 0, maior = -Infinity, menor = Infinity, soma = 0;
    let cred = 0, deb = 0, pix = 0;
    let nomeMaior = '', nomeMenor = '';
    while (confirm('Cadastrar nova venda?')) {
        let nome = prompt('Nome cliente:');
        let valor = parseFloat(prompt('Valor compra:'));
        let forma = prompt('Forma [CRÉDITO/DÉBITO/PIX]:').toUpperCase();
        soma += valor;
        vendas++;
        if (valor > maior) {
            maior = valor;
            nomeMaior = nome;
        }
        if (valor < menor) {
            menor = valor;
            nomeMenor = nome;
        }
        if (forma === 'CRÉDITO') cred++;
        else if (forma === 'DÉBITO') deb++;
        else if (forma === 'PIX') pix++;
    }
    let media = (soma / vendas).toFixed(2);
    alert('Maior: ' + nomeMaior + ' (R$' + maior.toFixed(2) + ')\nMenor: ' + nomeMenor + ' (R$' + menor.toFixed(2) + ')\nMédia: R$' + media + '\nCrédito: ' + cred + '\nDébito: ' + deb + '\nPIX: ' + pix);
}

function exercicio49() {
    let alunos = 0, maiorIMC = -Infinity, menorIMC = Infinity;
    let abaixo = 0, normal = 0, acima = 0;
    let somaIdade = 0, nomeMaior = '', nomeMenor = '';
    while (confirm('Cadastrar novo aluno?')) {
        let nome = prompt('Nome:');
        let idade = parseInt(prompt('Idade:'));
        let peso = parseFloat(prompt('Peso (kg):'));
        let altura = parseFloat(prompt('Altura (m):'));
        let imc = peso / (altura * altura);
        somaIdade += idade;
        alunos++;
        if (imc < 18.5) abaixo++;
        else if (imc <= 24.9) normal++;
        else acima++;
        if (imc > maiorIMC) {
            maiorIMC = imc;
            nomeMaior = nome;
        }
        if (imc < menorIMC) {
            menorIMC = imc;
            nomeMenor = nome;
        }
    }
    let mediaIdade = (somaIdade / alunos).toFixed(2);
    alert('Maior IMC: ' + nomeMaior + ' (' + maiorIMC.toFixed(2) + ')\nMenor IMC: ' + nomeMenor + ' (' + menorIMC.toFixed(2) + ')\nMédia idade: ' + mediaIdade + '\nAbaixo peso: ' + abaixo + '\nNormal: ' + normal + '\nAcima: ' + acima);
}

function exercicio50() {
    let titulos = 0, maiorNota = -Infinity, menorNota = Infinity, somaNota = 0;
    let filme = 0, serie = 0, anime = 0;
    let nomeMaior = '', nomeMenor = '';
    while (confirm('Cadastrar novo título?')) {
        let nome = prompt('Nome título:');
        let tipo = prompt('Tipo [FILME/SÉRIE/ANIME]:').toUpperCase();
        let nota = parseFloat(prompt('Nota (0-10):'));
        somaNota += nota;
        titulos++;
        if (nota > maiorNota) {
            maiorNota = nota;
            nomeMaior = nome;
        }
        if (nota < menorNota) {
            menorNota = nota;
            nomeMenor = nome;
        }
        if (tipo === 'FILME') filme++;
        else if (tipo === 'SÉRIE') serie++;
        else if (tipo === 'ANIME') anime++;
    }
    let media = (somaNota / titulos).toFixed(2);
    alert('Maior nota: ' + nomeMaior + ' (' + maiorNota + ')\nMenor nota: ' + nomeMenor + ' (' + menorNota + ')\nMédia: ' + media + '\nFilmes: ' + filme + '\nSéries: ' + serie + '\nAnimes: ' + anime);
}
function exercicio51() {
    let contador = 10;
    while(contador <= 0)
        contador - contador ;
    alert("Contagem finalizada!");      
    
}
   