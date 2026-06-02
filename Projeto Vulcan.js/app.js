const sensores = require('./sensores');
const motor = require('./motor');

const temperaturas = [40, 50, 60];
const velocidadeAtual = 30;
const aceleracao = 20;

const dadosSensores = sensores(temperaturas);

const statusMotor = motor(velocidadeAtual, aceleracao);

console.log("===== PAINEL DE TELEMETRIA =====");

console.log("Média Temperatura:", dadosSensores.media + "°C");

console.log("Velocidade Final:", statusMotor.velocidadeFinal + " km/h");

console.log("===============================");