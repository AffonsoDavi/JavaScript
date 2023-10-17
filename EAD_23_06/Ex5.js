const ComEspacos = ["Uchoinnn,   Silvinnn!", "  JavaScript      "];

const SemEspacos = ComEspacos.map(str => {
    return str.replace(/\s/g, '');
});

console.log(SemEspacos);