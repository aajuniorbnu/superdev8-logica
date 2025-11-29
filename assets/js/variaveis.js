function exemploVariaveisTexto(){
const produto1 = "Xbox";
const produto2 = "GameBoy Color";
//Concatenando a variavel produto1 com espaço e depois produto2
const produtos =  produto1  + " " +  produto2;
alert("Produto: " +  produtos);
}

function exemploVariaveisInteiro(){
const numero1= 18;
const numero2= 147;
// const soma = 18 +147; => 165
//+ da linha abaixo ele está fazendo uma soma
const soma = numero1 + numero2;
// + da linha abaixo ele está fazendo uma concatenacao
alert("Soma: " + soma)
}
function exemploVariaveisFloat(){
    const quantidadedeHoras = 10;
    const valorHora = 2.31;

    const salarioBruto = quantidadedeHoras * valorHora;
    alert("Salario bruto: " + salarioBruto);
}
function exemploVariaveisBoolean(){
    let lorenzoFechouAba = false;
    lorenzoFechouAba = true;
    alert("Lorenzo fechou a aba: " + lorenzoFechouAba);
}
function exemploVariaveis(){
    const destino = "Maceió"
    const quantidadeDias = 20;
    const precoDiaria = 1420.1;
    let finalizadaCompra = false;
    let valorTotal = quantidadeDias * precoDiaria;
    finalizadaCompra  = true;

    alert(

        "Destino: " + destino + 
        "\nQuantidade de dia:" + quantidadeDias + 
        "\nFinalizar compra: " + finalizadaCompra +
        "\nValor total: R$" + valorTotal

    );
}
function Pokemon(){
    const nomePokemon = "Alakazan";
    const numeroPokemon = "65";
    const descricao = "It has an incredibly high level of intelligence. Some say that Alakazam remembers everything that ever happens to it, from birth till death";
    const alturaPokemon = 1.5;
    const pesoPokemon = 48.0;
    const categoriaPokemon = "Psico";
    const habilidades = "Inner Focus";
    let imc = pesoPokemon / alturaPokemon * alturaPokemon;

    alert(
        "Nome:" + nomePokemon +
        "\nNumero:" +  numeroPokemon +
        "\nDescricao:" + descricao +
        "\nAltura:" + alturaPokemon + 
        "\nPeso:" + pesoPokemon +
        "\nCategoria:" + categoriaPokemon +
        "\nHabilidades:" + habilidades + 
        "\nIMC:" + imc

    );
}
function Pokemon(){
    const nomePokemon = "Jumpluf";
    const numeroPokemon = "189";
    const descricao = "Jumpluff travels on seasonal winds. Once its cotton spores run out, its journey ends, as does its life.";
    const alturaPokemon = 0.8;
    const pesoPokemon = 3.0;
    const categoriaPokemon = "Planta";
    const habilidades = "Leaf Guard";
    let imc = pesoPokemon / alturaPokemon * alturaPokemon;

    alert(
        "Nome:" + nomePokemon +
        "\nNumero:" +  numeroPokemon +
        "\nDescricao:" + descricao +
        "\nAltura:" + alturaPokemon + 
        "\nPeso:" + pesoPokemon +
        "\nCategoria:" + categoriaPokemon +
        "\nHabilidades:" + habilidades + 
        "\nIMC:" + imc

    );
}