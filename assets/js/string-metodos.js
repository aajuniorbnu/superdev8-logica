function converterParaMaiusculo() {
    let texto = "Abacate";
    let textoMaiusculo = texto.toUpperCase();
    alert(`Texto original: ${texto}\nTexto em maiusculo: ${textoMaiusculo}`);
}
function converterParaMinusculo() {
    let texto = "Abacate";
    let textoMinusculo = texto.toLowerCase();
    alert(`Texto original: ${texto}\nTexto em minusculo: ${textoMinusculo}`);
}
function removerEspacos() {
    let texto = " Uma frase bem legal  ";
    let textoSemEspacosComeco = texto.trimStart();
    alert(`Texto original: "${texto}"\nTexto sem espaços no começo: "${textoSemEspacosComeco}"`);
}
function removerEspacosFinal() {
    let texto = " Uma frase bem legal  ";
    let textoSemEspacosFinal = texto.trimEnd();
    alert(`Texto original: "${texto}"\nTexto sem espaços no fim: "${textoSemEspacosFinal}"`);
}
function removerEspacosComecoFinal() {
    let texto = " Uma frase bem legal  ";
    //let textoSemEspacosComecoFinal = texto.trimStart().trimEnd();
    let textoSemEspacosComecoFinal = texto.trim();
    alert(`Texto original: "${texto}"\nTexto sem espaços no começo e no fim: "${textoSemEspacosComecoFinal}"`);
}
function substituir() {
    let texto = " Lorezzo Faltou";
    let novoTexto = texto.replace("Lorezzo", "Lorenzo");
    alert(`Texto original: "${texto}"\nTexto substituído: "${novoTexto}"`);

}
function substituirCaminho() {
    let valorString = "R$ 1.932.183,94";
    let valorStringNovo = valorString.replace("R$", "").replace(".", "").replaceAll(".", "").replace(",", ".");
    let valor = parseFloat(valorStringNovo);
    alert("Valor convertido " + valor + "\nValor dobrado: " + valor * 2);

}
function subString() {
    //31/01/2026
    //dia
    //mes
    //ano
    let data = "31/01/2026";
    let dia = data.substring(0, 2);
    let mes = data.substring(3, 5);
    let ano = data.substring(6, 10);
    //apresentar assim
    //blumenau, <dia> de <mes> de <ano>
    alert(`Blumenau, ${dia} de ${mes} de ${ano}`);
}
function substituirHorario() {
    //let horarioAmericano = "08:30 pm";
    let horarioAmericano = prompt("Digite o horário no formato americano");
    let hora = parseInt(horarioAmericano.substring(0, 2));//08
    let minutos = horarioAmericano.substring(3, 5);//30
    let periodo = horarioAmericano.substring(6, 8);//pm

    let horaBrasil = 0;
    if (periodo === "am") {
        horaBrasil = hora;
    } else {
        //Pós almoço
        horaBrasil = hora + 12;
    }
    let horarioBrasil = `${horaBrasil}:${minutos}`;
    alert(`Horário americano: ${horarioAmericano}
        Horário Brasil: ${horarioBrasil}`);
}
function exemploLength() {
    let texto = "Vingadores Guerra Infinita";
    let quantidadeCaracteres = texto.length;
    alert(`Texto: ${texto}
        Quantidade de caracteres: ${quantidadeCaracteres}`);

}
function comecaCom() {
    let nomeEmpesa = "Blusoft";
    let empresaBlumenau = true;
    if (nomeEmpesa.startsWith("Blu")) {
        empresaBlumenau = true;
    } else {
        empresaBlumenau = false;
    }
    alert(`Empresa BLumenau: ${nomeEmpesa}
        Nome da empresa: ${empresaBlumenau}`);
}
function terminaCom() {
    let nomeCompleto = "Ana da Silva";
    if (nomeCompleto.toUpperCase().endsWith("SILVA") || nomeCompleto.toUpperCase().endsWith("SOUZA ")) {
        alert("Sobrenome comum");
    } else {
        alert("Não é um sobrenome comum");

    }
}
function contem() {
    let refeicao = "Pure de feijão com frango";
    if (refeicao.toLowerCase().includes("feijão") || refeicao.toLowerCase().includes("feijao")) {
        alert("Tipicamente brasileiro");
    } else {
        alert("Outra comida");
    }
}
function indiceDoCaractere() {
    let hora = "23:49";
    //Retornar o inndice do caractere encontrado, caso não encontre retorna -1
    let indiceDoDoisPontos = hora.indexOf(":");
    alert(`Hora: ${hora}
        Índice do caractere ":": ${indiceDoDoisPontos}`);

}
function quebrarString() {
    let data = "31/01/2026";
    let partes = data.split("/");//=>["31", "01", "2026"]
    let dia = partes[0];//"31/01/2026"=>"31", "01", "2026"
    let mes = partes[1];
    let ano = partes[2];
    //Apresentar assim
    //Blumenau, <dia> de <mes> de <ano>
    alert(`Blumenau, ${dia} de ${mes} de ${ano}`);

}
function quebrarStingDataHora() {
    let dataHora = "31/01/2026 23:49:10";
    let parteDataHora = dataHora.split(" ");//["31/01/2026", "23:49:10"]
    let partesData = parteDataHora[0].split("/");//["31", "01", "2026"]
    let partesHora = parteDataHora[1].split(":");//["23", "49", "10"]

    let hora = partesHora[0];//23
    let minuto = partesHora[1];//49
    let segundo = partesHora[2];//10
    alert(`Blumenau, ${dia} de ${mes} de ${ano} às ${hora}h${minuto}m${segundo}s`);
}
function padStart() {
    //Apresentar sempre 15 caracteres
    letnumeroCartao = "5230 9713 6338 5801";
    let UltimosNumeros = numeroCartao.subString(15, 19);
    alert(UltimosNumeros.padStart(16, "*"));
}
function padEnd() {
    //CSV separando por caracteres
    //Matheus;25;5930.24
    //CSV separando por largura fixa
    //nome 30 caracteres idade 3 caracteres saldo 10 caracteres
    //Matheus                       25     5930.24
    //Ana da Silva Souza            74     25419.37
    let nome = "Matheus";
    let idade = "25";
    let saldo = "5930.24";

    let linha = nome.padEnd(30, "") + idade.toString().padStart(3, " ") + saldo.toString().padStart(10, " ");
    alert(`Linha CSV: '${linha}'`);
}
