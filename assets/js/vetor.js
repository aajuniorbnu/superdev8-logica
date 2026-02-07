//var=> Variavel global, ou seja, existe em todos os arquivos(inseguro)
//let=> Variavél que possuie escopo , ou  seja, existe dentro do if,while,for (seguro)
//const=> Variavel que nao permite alteraçao,sou seja, uma vez que foi dfinido o valor nao é possivelaltera.tem a. mesm caracteristica do let em relacao ao escopo,existe dentro do if,while,function,fora deixa de existir(ela morre).

function exemplo1(){
alert("abre o console filhao");
    let frutas = [];//criando vetor
    //adicionando elementos no vetor
    frutas.push("Maça");
    frutas.push("Pera");
    frutas.push("Tomtate");
    frutas.push("Rucúla");
    //alterando elemento do vetor
    frutas[2]= "Tomate";
    //removendo elemento do vetor Rucula pq nao [e fruta]
    frutas.splice(3,1);//splice(indice,quantidade de elementos a serem removidos)
    console.log("Tamanho do vetor frutas: " + frutas.length);
}
function exercicio01(){
    let jogos = [];
    jogos.push("TIbia");
    jogos.push("Battlefield 4");
    jogos.push("League of Legends");
    jogos.push("Medal of Honor");
    jogos.push("GTA 6");
    jogos.splice(2,1);
    jogos[4]= "GTA VI";
    console.log("Tamanho do vetor jogos: " + jogos.length);
    console.log(jogos);
}
function exercicio02(){
    let pratos=[];
    pratos.push("Strogonoff");
    pratos.push("panqueca");
    pratos.push("Salada");
    pratos.splice(2,1);
    pratos[1]= "Panqueca de carne";
    pratos.push("Risoto");
    pratos.push("Sopa");
  
    console.log("Tamanho da lista de  pratos: " + pratos.length);
    console.log(pratos);
}