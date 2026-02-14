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
    let smartphones = [];
    let quantidadeEstoque = [];
    let precosUnitarios = [];

    // COLETA DE DADOS
    for (let i = 0; i < 5; i = i + 1) {
        let nome = prompt(`Digite o nome do ${i + 1}º smartphone:`);
        let quantidade = parseInt(prompt(`Digite a quantidade em estoque de ${nome}:`));
        let preco = parseFloat(prompt(`Digite o preço unitário de ${nome}:`));

        smartphones.push(nome);
        quantidadeEstoque.push(quantidade);
        precosUnitarios.push(preco);
    }

    // CÁLCULO DO MAIOR ESTOQUE
    let maiorQuantidade = quantidadeEstoque[0];
    let indiceMaior = 0;

    for (let i = 1; i < 5; i = i + 1) {
        if (quantidadeEstoque[i] > maiorQuantidade) {
            maiorQuantidade = quantidadeEstoque[i];
            indiceMaior = i;
        }
    }

    // CÁLCULO DO MENOR ESTOQUE
    let menorQuantidade = quantidadeEstoque[0];

    for (let i = 1; i < quantidadeEstoque.length; i = i + 1) {
        if (quantidadeEstoque[i] < menorQuantidade) {
            menorQuantidade = quantidadeEstoque[i];
        }
    }

    // CÁLCULO DO VALOR TOTAL GERAL
    let valorTotalGeral = 0;
    for (let i = 0; i < smartphones.length; i = i + 1) {
        valorTotalGeral = valorTotalGeral + (quantidadeEstoque[i] * precosUnitarios[i]);
    }

    // MONTAGEM DA MENSAGEM
    let mensagem = "LISTA COMPLETA DE SMARTPHONES\n";
    mensagem = mensagem + "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";

    for (let i = 0; i < smartphones.length; i = i + 1) {
        let status = '';

        if (quantidadeEstoque[i] >= 10) {
            status = 'Elevado';
        } else if (quantidadeEstoque[i] >= 7) {
            status = 'Estável';
        } else if (quantidadeEstoque[i] >= 4) {
            status = 'Preocupante';
        } else if (quantidadeEstoque[i] >= 1) {
            status = 'Urgente';
        } else {
            status = 'Esgotado';
        }

        let valorTotalEstoque = quantidadeEstoque[i] * precosUnitarios[i];

        mensagem = mensagem + `${i + 1}. ${smartphones[i]}\n`;
        mensagem = mensagem + `   Preço: R$ ${precosUnitarios[i].toFixed(2)}\n`;
        mensagem = mensagem + `   Estoque: ${quantidadeEstoque[i]} unidades\n`;
        mensagem = mensagem + `   Valor Total: R$ ${valorTotalEstoque.toFixed(2)}\n`;
        mensagem = mensagem + `   Status: ${status}\n\n`;
    }

    mensagem = mensagem + "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
    mensagem = mensagem + "ESTATÍSTICAS\n";
    mensagem = mensagem + "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";
    mensagem = mensagem + `Maior Estoque:\n   ${smartphones[indiceMaior]} (${maiorQuantidade} un.)\n\n`;
    mensagem = mensagem + `Menor Quantidade: ${menorQuantidade} un.\n\n`;
    mensagem = mensagem + `Valor Total em Estoque:\n   R$ ${valorTotalGeral.toFixed(2)}`;

    alert(mensagem);
}