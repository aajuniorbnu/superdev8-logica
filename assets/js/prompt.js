function solicitarString() {
    let nome = prompt("Digite o seu nome");
    let sobrenome = prompt("Digite o seu sobrenome");

    let nomeSobrenome = nome + " " + sobrenome;
    alert("Nome completo: " + nomeSobrenome)
}
function solicitarInt() {
    let numeroCartao = parseInt(prompt("Digite o número do cartåo"));
    let codigoSeguranca = parseInt(prompt("Digite o código de segurança"));

    alert("Número:" + numeroCartao + "\nCVV: " + codigoSeguranca)

}
function solicitarFloat() {
    let saldoBancario = parseFloat(prompt("Digite o saldo Bancário"));
    const saque = parseFloat(prompt("Digite o valor do saque"));

    saldoBancario = saldoBancario - saque;

    alert("Saque realizado: " + saque + "\nSaldo atual:" + saldoBancario);


}
function solicitarBoolean() {
    let vencido = confirm("Produto vencido?");
    alert("Produto vencido: " + vencido);

}
function paciente() {
    let nome = prompt("Digite sua nome");
    const idade = parseInt(prompt("Digite a sua idade"));
    const peso = parseFloat(prompt("Digete o seu peso"));
    const cpf = prompt("Digite Cpf");
    const possuiPlano = confirm("Possuí plano de saude?")

    let planoSaude = "";
    //se plano de saude for igual a verdadeiro
    if(possuiPlano === true) {
        planoSaude = prompt("Digite o nome do plano de Saúde");
    }
    const tipoSanguineo = prompt("Digite o tipo sanguíneo");
    const altura = parseFloat(prompt("Digite  a altura"));

    const urgencia = prompt(`Escolha o nível de Urgência 
        [Migué, Atestado, Dorzinha, Dengue, Dor Extrema ]`);

    let tempoEspera = 0;
    if (urgencia === "Migué") {
        tempoEspera = 180;
    } else if (urgencia === "Atestado") {
        tempoEspera = 150;
    } else if (urgencia === "Dorzinha") {
        tempoEspera = 120;
    } else if (urgencia === "Dengue") {
        tempoEspera = 60;
    } else if (urgencia === "Dor Extrema") {
        tempoEspera = 30;
    } else {
        alert("Nivel de Urgencia Inexistente");
        return;
    }
    alert(
        "Dados do Paciente\n\n" + 
        "Nome: " + nome + "\n" + 
        "Idade: " + idade + " anos\n" +
        "Peso: " + peso + " kg\n" + 
        "CPF: " + cpf + "\n" + 
        "Possui Plano de Saúde: " + (possuiPlanoSaude ? "Sim" : "Nao") + "\n" +
        (possuiPlano ? "Plano de Saúde: " + planoSaude + "\n" : "") +
        "Tipo Sanguineo: " + tipoSanquineo + "\n" +
        "Altura: " + altura + "m\n" +
        "Nivel Urgencia: " + urgencia + "\n" +
        "Tempo de espera: " + tempoEspera + "minutos"
    );




}