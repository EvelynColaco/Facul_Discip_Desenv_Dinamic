// Função que recebe a cor do semáforo e decide a ação do pedestre
function verificarSemaforo(corDoSemaforo) {
    switch (corDoSemaforo) {
        case 'verde':
            console.log("Pode atravessar");
            break;
        case 'amarelo':
            console.log("Atenção! Prepare-se para parar");
            break;
        case 'vermelho':
            console.log("Não atravesse");
            break;
        default:
            console.log("Cor inválida! Aguarde até que o semáforo esteja em uma cor válida.")
    }
}

verificarSemaforo("verde")
verificarSemaforo("amarelo")
verificarSemaforo("vermelho")
verificarSemaforo("azul")