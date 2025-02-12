// CRIANDO UMA FUNÇÃO
function saudacao(){
    console.log("Olá, Mundo");    
}

// PASSANDO PARÂMETROS PARA FUNÇÕES
function novaSaudacao(nome) {
    console.log("Seja Bem Vindo(a)", nome);
}

saudacao();
novaSaudacao("Evelyn");
novaSaudacao("Jhonson");


// CRIANDO FUNÇÃO SOMA 
function soma(a, b) {
    return a + b   
}
let resultado = soma(4, 5);

console.log("A soma dos números é: ", resultado); 
