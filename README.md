# Projeto-Vulcan

## Aplicação Principal

Este módulo integra os sistemas do Projeto Vulcan, realizando a comunicação entre os módulos de sensores e motor para processar dados e exibir informações de telemetria.

## Funcionalidades
- Importa os módulos `motor.js` e `sensores.js`.
- Define dados de teste para simulação.
- Processa informações dos sensores.
- Calcula a velocidade final do motor.
- Exibe um painel de telemetria no terminal.
- Apresenta a média das temperaturas coletadas.
- Simula o monitoramento de desempenho do sistema.

## Estrutura do Projeto
- `app.js` → Aplicação principal.
- `motor.js` → Responsável pelos cálculos relacionados ao motor.
- `sensores.js` → Responsável pelo processamento dos dados dos sensores.

## Tecnologias Utilizadas
- JavaScript
- Node.js
- CommonJS (`require` e `module.exports`)

## Como Executar

1. Clone o repositório.
2. Acesse a pasta do projeto.
3. Execute o comando:

```bash
node app.js
