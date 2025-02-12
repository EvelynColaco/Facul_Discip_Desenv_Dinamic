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
let resultado1 = soma(4, 5);
let resultado2 = soma(10, 7)
let resultado3 = soma(8, 12)

console.log("A soma dos números do resultado 1 é: ", resultado1);
console.log("A soma dos números do resultado 2 é: ", resultado2); 
console.log("A soma dos números do resultado 3 é: ", resultado3);    
