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
            alert(`Acertou ${nomeJogo}`)}
        
        
        if (palavras.length === 0) {
            alert("Ganhou o jogo!");
            break;
        }else {
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

