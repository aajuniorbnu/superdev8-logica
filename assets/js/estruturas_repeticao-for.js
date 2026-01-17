function exemplo01() {
    // solicitar o nome de quatro pessoas
    //Declarando a variavel
    let indice = 0;
    //condiçao 
    while (indice <4) {
        let nome = prompt(`Digite o nome`);
        indece = indice + 1;
  }
//declarar variavel
//condiçao
//incremento
for(let indice = 0; indice < 4; indice = indice + 1){
    let nome = prompt(`Digite o nome`);
}
}
function relogio(){
    for(let hora = 0; hora < 24; hora = hora + 1){
        for(let minuto = 0; minuto < 60; minuto = minuto + 1){
            for(let segundo = 0; segundo < 60; segundo = segundo + 1){
                alert(`${hora}:${minuto}:${segundo}`);
            }
        }
    }
}
function solicitarDadosPaciente(){
    let quantidadePacientes = parent.prompt("DIgite a quantidade de pacientes ");
    for (let indice=0; indice < quantidadePacientes; indice = indice + 1){
        let nome = parent.prompt("Digite o nome do paciente ");
        let idade = parent.prompt("Digite a idade do paciente ");
        let peso = parent.prompt("Digite o peso do paciente ");
        alert(`Paciente ${indice + 1}: ${nome}, ${idade} anos, ${peso} kg`);
    }    
}
function exemploContagemRegressiva(){
    //declarar a variavel;condiçao;incremento
    for(let indice = 10; indice >= 0; indice = indice - 1){
        alert(indice);
    }
    alert("Feliz ano novo!");
}
function exemploNumerosParesAte1000(){
    for( let i = 0; i <= 1000; i = i + 2){
        alert(i);
    }
}