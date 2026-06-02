function motor(velocidadeAtual, aceleracao){
    let velocidadeFinal = velocidadeAtual + aceleracao;

    if (velocidadeFinal <= 100) {
        console.log("Velocidade Final: " + velocidadeFinal);
        console.log("Sistema Seguro");
    } else {
        console.log("Velocidade Final: " + velocidadeFinal);
        console.log("ALERTA DE SOBRECARGA");
    }

    return{
        velocidadeFinal
    }
}

module.exports = motor;