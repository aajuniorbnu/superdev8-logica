function personagem(){
    let nomePersonagem = prompt("Digite nome do Personagem");
    const idade = parseInt (prompt("Digite idade"));
    const cidade = prompt ("Digite a cidade");
    const possuiPoderes = confirm ("Possui Poderes?");
    let poderes = ""; 
    if(possuiPoderes === true){
        poderes = prompt("Digite o Poder");
    }
    const atuacaoMensal = parseInt(prompt("Digite a quantidade mensal"));
    alert(
        "Nome: " + nomePersonagem + "\n" +
        "Idade: " + idade + "\n" +
        "Cidade: " + cidade + "\n" + 
        "Possui poder: " + (possuiPoderes ? "Sim" : "Nao") + "\n" +
        (possuiPoderes ? "Possui poder:" + poderes + "\n" : "") 
    

    );
}
