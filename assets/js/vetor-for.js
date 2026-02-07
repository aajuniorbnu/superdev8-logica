function exemploJogos() {
    let jogos = [];
    //lfor (let i = 0; i < 5; i+= 1)
    for (let i = 0; i < 5; i += 1) {
        let nomeJogo = prompt("Digite o nome do jogo:");
        jogos.push(nomeJogo);
    }
    //apresentar os jogos
    let textoParaApresenntar = "";
    for (let i = 0; i < 5; i += 1) {
        let nomeJogo = jogos[i];
        textoParaApresenntar += textoParaApresenntar + nomeJogo + "\n";
    }
    alert("Jogos:" + textoParaApresenntar);
}
function calculadora() {
    let numeros = [];
    //solicitar 4 números
    for (let i = 0; i < 4; i += 1) {
        let numero = parseFloat(prompt("Digite um número:"));
        //adicionar ao vetor
        numeros.push(numero);
    }
    //calcular a soma
    let soma = 0;
    for (let i = 0; i < 4; i += 1) {
        soma = soma + numeros;
    }
    //apresentar o resultado
    alert(" Soma : " + soma);
}
function calcularFolhasPagamento() {
    let colaboradores = ["Lorenzo", "Augusto", "Jundity", "Narutinho"];
    let horasTrabalhadas = [320, 80, 220, 50];
    let valoresPorHora = [65, 15, 15, 700];
    let descontos = [1000, 250, 200, 1000];
    let auxilios = [1300, 250, 8, 5000];
    let salariosBrutos = [];
    let salariosLiquidos = [];

    let quantidadeColaboradores = parseInt(prompt("Digite a quantidade de colaboradores que deseja gerar as folhas de pagamento"));

    for (let i = 0; i < quantidadeColaboradores; i += 1) {
        let nomeColaborador = prompt("Digite o nome do colaborador:");
        let quantidadeHorasTrabalhadas = parseInt(prompt("Digite a quantidade de horas trabalhadas:"));
        let valorPagoPorHora = parseFloat(prompt("Digite o valor por hora trabalhada:"));
        let temDesconto = confirm("Tem desconto?");
        let valorDesconto = 0;
        if (temDesconto === true) {
            valorDesconto = parseFloat(prompt("Digite o valor do desconto:"));
        }

        let temAuxilio = confirm("Tem auxilio?");
        let valorAuxilio = 0;
        if (temAuxilio === true) {
            valorAuxilio = parseFloat(prompt("Digite o valor do auxilio:"));
        }
        debugger
        colaboradores.push(nomeColaborador);
        horasTrabalhadas.push(quantidadeHorasTrabalhadas);
        valoresPorHora.push(valorPagoPorHora);
        descontos.push(valorDesconto);
        auxilios.push(valorAuxilio);
    }
    for (let i = 0; i < quantidadeColaboradores; i += 1) {
        const quantidadeHorasTrabalhadas = horasTrabalhadas[i];
        const valorPorHora = valoresPorHora[i];
        let salarioBruto = quantidadeHorasTrabalhadas * valorPorHora;
        salariosBrutos.push(salarioBruto);
    }
    for (let i = 0; i < quantidadeColaboradores; i += 1) {
        let salarioLiquido = salariosBrutos[i] - descontos[i] + auxilios[i];
        salariosLiquidos.push(salarioLiquido);
    }
    for (let i = 0; i < quantidadeColaboradores; i += 1) {
        const nomeColaborador = colaboradores[i];
        const horas = horasTrabalhadas[i];
        const valorHora = valoresPorHora[i];
        const desconto = descontos[i];
        const auxilio = auxilios[i];
        const salarioBruto = salariosBrutos[i];
        const salarioLiquido = salariosLiquidos[i];
        alert(
            "🧾 Folha de Pagamento\n" +
            "━━━━━━━━━━━━━━━━━━━━\n" +
            "👤 Colaborador: " + nomeColaborador + "\n" +
            "⏱️ Horas trabalhadas: " + horas + "\n" +
            "💰 Valor por hora: R$ " + valorHora.toFixed(2) + "\n" +
            "🟢 Salário bruto: R$ " + salarioBruto.toFixed(2) + "\n" +
            "🔻 Descontos: R$ " + desconto.toFixed(2) + "\n" +
            "🎁 Auxílios: R$ " + auxilio.toFixed(2) + "\n" +
            "━━━━━━━━━━━━━━━━━━━━\n" +
            "✅ Salário líquido: R$ " + salarioLiquido.toFixed(2) + " 💵"
        );
    }
}
function jogoPalavras() {
    let palavras = ["Roblox", "Free Fire", "GTA VI"]
    let nomeJogador = prompt("Digite seu nome:");
    let quantidadeTentativas = 10;
    if (nomeJogador.toLowerCase().includes("Lorenzo".toLowerCase())) {
        quantidadeTentativas = 3;
    }
    while (quantidadeTentativas > 0) {
        let nomeJogo = prompt("Digite o nome do jogo:");
        //verificando se o nome q usuario digitou está na lista
        if (palavras.includes(nomeJogo)) {
            //Dar mais 3 tentativas a cada acerto
            quantidadeTentativas += 3;
            //como descobrir a posição 
            let indiceJogo = palavras.indexOf(nomeJogo);
            //remover da lista jogo q acertou
            palavras.splice(indiceJogo, 1);
            console.log(palavras);
            alert(`Acertou ${nomeJogo}`)
        }


        if (palavras.length === 0) {
            alert("Ganhou o jogo!");
            break;
        } else {
            //decrementar em 1 
            quantidadeTentativas -= 1;
            alert(`Errou\nVocê ainda tem ${quantidadeTentativas} tentativas restantes.`);
        }

        console.log("Quantidade de tentativas: " + quantidadeDetentativas + "\npalavras " + palavras);


        if (quantidadeTentativas <= 0) {
            alert("Perdeu o jogo!");
            break;
        }
    }
}

function exempltoTintas() {
    let tintas = [];
    //solicitar 5 cores de tintas
    for (let i = 0; i < 5; i = i + 1) {
        let nomeTinta = prompt("Digite a cor da tinta:");
        //adicinando salvando o nome da tinta no vetor
        tintas.push(nomeTinta);
    }
    let texto = "";
    for (let i = 0; i < 5; i = i + 1) {
        //texto = texto + tintas[i] + "\n";
        texto += tintas[i] + "\n";
    }
    alert("Tintas:\n" + texto);
}
function alunos() {
    let alunos = [];
    for (let i = 0; i < 13; i = i + 1) {
        let nomeAluno = prompt("Digite o nome do aluno:");
        alunos.push(nomeAluno);
    }

    alert("Quantidade de alunos: " + alunos.length);

    let resultado = "";
    for (let i = 0; i < 13; i = i + 1) {
        resultado += alunos[i] + "\n";
    }
    alert(resultado);

    let menorNomeAluno = alunos[0];//ou "ahuhsuahushuahduashudhsu"
    //percorrer o vetor para encontrar o menor nome
    for (let i = 0; i < 13; i = i + 1) {
        //pegar nome aluno
        let nomeAlunoPercorrido = alunos[i];
        //verificar se o tamanhon do nome percorrido é menor que o menor nome
        if (nomeAlunoPercorrido.length < menorNomeAluno.length) {
            //caso sim: atualizar o menorNomeAluno com o nome do aluno
            menorNomeAluno = nomeAlunoPercorrido;
        }
    }
    alert("Menor nome: " + menorNomeAluno);
}

function exercicio01() {
    let smartphone = [];
    let quantidadeSmartphonesEstoqoue = parseInt(prompt("Digite a quatidade"));
    let statusEstoque = [];
    let quantidadeEstoque = [];
    let preco = parseFloat(prompt(`Digite o preço unitário :`));


    for (let i = 0; i < 5; i = i + 1) {
        let nomeSmartphone = prompt("Digite o nome do smartphone:");
        smartphone.push(nomeSmartphone);
        let quantidadeEstoque = parseInt(prompt("Digite a quantidade em estoque:"));

        quantidadeSmartphonesEstoqoue.push(quantidadeEstoque);
        precoUnitario.push(preco)
    }
    for (let i = 0; i < 5; i = i + 1) {
        let status = statusEstoque
        let nomeSmartphone = prompt("Digite o nome do smartphone:");
        smartphone.push(nomeSmartphone);
        let quantidadeEstoque = parseInt(prompt("Digite a quantidade em estoque:"));

        quantidadeSmartphonesEstoqoue.push(quantidadeEstoque);
        precoUnitario.push(preco)

        if (quantidadeEstoque[i] >= 10) {
            statusEstoque = 'Elevado';

        } else if (quantidadeEstoque[i] >= 7) {
            statusEstoque = 'Estável';

        } else if (quantidadeEstoque[i] >= 4) {
            statusEstoque = 'Preocupante';

        } else if (quantidadeEstoque[i] >= 1) {
            statusEstoque = 'Urgente';
        }
        for (let i = 1; i < quantidadeEstoque.length; i = i + 1) {
            if (quantidadeEstoque[i] < menorQuantidade) {
                menorQuantidade = quantidadeEstoque[i];
            }
        }
        for (let i = 0; i < 5; i = i + 1) {
            let nomeSmartphone = prompt(`Digite o nome do ${i + 1}º smartphone:`);
            let quantidade = parseInt(prompt(`Digite a quantidade em estoque de ${nomeSmartphone}:`));
            let preco = parseFloat(prompt(`Digite o preço unitário de ${nomeSmartphone}:`));

            smartphone.push(nomeSmartphone);
            quantidadeEstoque.push(quantidade);
            precosUnitarios.push(preco);
        }


        let maiorQuantidade = quantidadeEstoque[0];
        let indiceMaior = 0;

        for (let i = 1; i < 5; i = i + 1) {
            if (quantidadeEstoque[i] > maiorQuantidade) {
                maiorQuantidade = quantidadeEstoque[i];
                indiceMaior = i;
            }
        }
        let menorQuantidade = quantidadeEstoque[0];

        for (let i = 1; i < quantidadeEstoque.length; i++) {
            if (quantidadeEstoque[i] < menorQuantidade) {
                menorQuantidade = quantidadeEstoque[i];
            }
        }
        let valorTotalGeral = 0;
        for (let i = 0; i < smartphone.length; i = i + 1) {
            valorTotalGeral += quantidadeEstoque[i] * precosUnitarios[i];
        }


        let mensagem = "LISTA COMPLETA DE SMARTPHONES\n";
        mensagem += "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";

        for (let i = 0; i < smartphone.length; i = i + 1) {
            let status = '';


            if (quantidadeEstoque[i] >= 10) {
                status = 'Elevado';

            } else if (quantidadeEstoque[i] >= 7) {
                status = 'Estável';

            } else if (quantidadeEstoque[i] >= 4) {
                status = 'Preocupante';

            } else if (quantidadeEstoque[i] >= 1) {
                status = 'Urgente';


            }


        }
    }
    for (let i = 0; i < smartphone.length; i = i + 1) {
        let status = '';


        if (quantidadeEstoque[i] >= 10) {
            status = 'Elevado';

        } else if (quantidadeEstoque[i] >= 7) {
            status = 'Estável';

        } else if (quantidadeEstoque[i] >= 4) {
            status = 'Preocupante';

        } else if (quantidadeEstoque[i] >= 1) {
            status = 'Urgente';



            let valorTotalEstoque = quantidadeEstoque[i] * precosUnitarios[i];

            mensagem += `${i + 1}. ${smartphones[i]}\n`;
            mensagem += ` Preço: R$ ${precosUnitarios[i].toFixed(2)}\n`;
            mensagem += ` Estoque: ${quantidadeEstoque[i]} unidades\n`;
            mensagem += `Valor Total: R$ ${valorTotalEstoque.toFixed(2)}\n`;
            mensagem += `Status: ${emoji} ${status}\n\n`;
        }


        mensagem += "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
        mensagem += "ESTATÍSTICAS\n";
        mensagem += "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";
        mensagem += ` Maior Estoque:\n   ${smartphones[indiceMaior]} (${maiorQuantidade} un.)\n\n`;
        mensagem += ` Menor Quantidade: ${menorQuantidade} un.\n\n`;
        mensagem += ` Valor Total em Estoque:\n   R$ ${valorTotalGeral.toFixed(2)}`;

        alert(mensagem);

    }

}



function exercicio02() {

    let produtos = [];
    let categorias = [];
    let precos = [];
    let descontos = [];

    for (let i = 0; i < 5; i = i + 1) {
        let nome = prompt(`Digite o nome do produto ${i + 1}:`);
        let categoria = prompt(`Digite a categoria do produto ${i + 1}:`);
        let preco = parseFloat(prompt(`Digite o preço do produto ${i + 1}:`));
        let desconto = parseFloat(prompt(`Digite o desconto (%) do produto ${i + 1}:`));

        produtos.push(nome);
        categorias.push(categoria);
        precos.push(preco);
        descontos.push(desconto);
    }
}
for (let i = 0; i < precos.length; i = i + 1) {
    let classificacao;

    if (precos[i] >= 100) {
        classificacao = "Caro";
    } else if (precos[i] >= 50) {
        classificacao = "Médio";
    } else if (precos[i] >= 20) {
        classificacao = "Barato";
    } else {
        classificacao = "Muito barato";
    }

}

let maiorPreco = precos[0];
for (let i = 1; i < precos.length; i = i + 1) {
    if (precos[i] > maiorPreco) {
        maiorPreco = precos[i];
    }
}

let menorPreco = precos[0];
let indiceMenor = 0;

for (let i = 1; i < precos.length; i = i + 1) {
    if (precos[i] < menorPreco) {
        menorPreco = precos[i];
        indiceMenor = i;
    }
}

for (let i = 0; i < produtos.length; i = i + 1) {
    let precoFinal = precos[i] - (precos[i] * descontos[i] / 100);

    alert(`Produto: ${produtos[i]} | Preço: R$ ${precos[i]} | Desc: ${descontos[i]}% | Final: R$ ${precoFinal}\n`)
}


function exercicioFibonacci() {
    const number = parseInt(prompt('Digite os numeros da sequencia: '));
    let numero1 = 0, numero2 = 1, nextTerm;

    console.log(' Sequencia Fibonacci :');

    for (let i = 1; i <= number; i = i + 1) {
        console.log(n1);
        nextTerm = numero1 + numero2;
        numero1 = numero2;
        numero2 = nextTerm;
    }
}

