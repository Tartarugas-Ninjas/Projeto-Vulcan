const sensores = require('./sensores');
const motor = require('./motor');

// Dados de teste
const temperaturas = [40, 50, 60];
const velocidadeAtual = 30;
const aceleracao = 20;

// Processamento dos dados
const dadosSensores = sensores(temperaturas);
const statusMotor = motor(velocidadeAtual, aceleracao);

// Painel de Telemetria
console.log('\n===== PAINEL DE TELEMETRIA =====');

console.log(`Média Temperatura: ${dadosSensores.media}°C`);
console.log(`Velocidade Final: ${statusMotor.velocidadeFinal} km/h`);

console.log('===============================\n');
