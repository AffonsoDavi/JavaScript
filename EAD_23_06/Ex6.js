function fazerRequisicao() {
    return new Promise(resolve => {
            resolve("Testeeeeee");
    });
}

fazerRequisicao()
    .then(resposta => {
        console.log("Requisição:", resposta);
    });