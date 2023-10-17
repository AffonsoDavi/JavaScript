const numeros = [1, 2, 3, 4, 5];
let soma = 0;

const medias = numeros.map(numero => {
    soma += numero;
    return soma / (numeros.indexOf(numero) + 1);
});

console.log(medias);