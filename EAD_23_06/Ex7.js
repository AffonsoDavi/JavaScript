function lerArquivo(caminhoArquivo) {
    return new Promise(function(resolve, reject) {
      const leitor = new FileReader();
      leitor.onload = function(evento) {
        const conteudoArquivo = evento.target.result;
        resolve(conteudoArquivo);
      };
      leitor.onerror = function() {
        reject(new Error('Erro ao ler o arquivo.'));
      };
      leitor.readAsText(caminhoArquivo);
    });
  }

  //Exemplos:
  lerArquivo('caminhoDoArquivo')
   .then(function(conteudoArquivo) {
     console.log('Conteúdo do arquivo:', conteudoArquivo);
  })
    .catch(function(erro) {
      console.error('Erro:', erro);
    }); 