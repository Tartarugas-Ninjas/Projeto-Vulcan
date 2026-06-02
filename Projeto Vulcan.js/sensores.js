function sensores(temperaturas) {

let soma = 0

for (let i = 0; i < temperaturas.length; i++) {
    soma = soma + temperaturas[i];
}

let media = soma / temperaturas.length;

console.log("Média térmica: " + media);

if (media > 50) {
    console.log("Ligar resfriamento");
} else {
    console.log("Resfriamento não necessário");
}
return {
    media
}
}
module.exports = sensores;