const objetos = [
    { nome: 'affonso', idade: 21 },
    { nome: 'uchoin', idade: 30 },
    { nome: 'Silvin', idade: 50 }
];

const nomes = objetos.map(objeto => objeto.nome);

console.log(nomes);