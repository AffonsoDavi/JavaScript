//ex 1
function selecionarProduto(produto) {
    switch (produto) {
      case 'refrigerante':
        //Bloco de codigo para refrigerante
        document.getElementById('mensagem').innerHTML = 'Você selecionou refrigerante.';
        break;
      case 'sorvete':
        //Bloco de codigo para sorvete
        document.getElementById('mensagem').innerHTML = 'Você selecionou sorvete.';
        break;
      case 'suco':
        //Bloco de codigo para suco
        document.getElementById('mensagem').innerHTML = 'Você selecionou suco.';
        break;
      case 'Nenhum':
        //Bloco de codigo para nenhum dos produtos acima
        document.getElementById('mensagem').innerHTML = 'Produto esgotado. Por favor, selecione outro.';
        break;
    }
  }

//-------------------------------------------------ex 2-----------------------------------------------------


  function subtrair() {
    //Obter os valores dos campos de entrada
    var valor1 = document.getElementById("valor1").value;
    var valor2 = document.getElementById("valor2").value;
    
    //Subtrair os valores
    var resultado = valor1 - valor2;
    
    //Exibir o resultado na pagina
    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
  }


  //----------------------------------------------ex 3------------------------------------------------------

  function dividir() {
    //Obter os valores dos campos de entrada
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    
    //Verificar se o divisor é zero
    if (num2 == 0) {
      document.getElementById("erro").innerHTML = "Erro: Não é possível dividir por zero.";

    } else {
      //Dividir os valores
      var resposta = num1 / num2;
      
      //Exibir o resultado na pagina
      document.getElementById("resposta").innerHTML = "Resultado: " + resposta;
    }
  }


  //------------------------------------------------ex 4-----------------------------------------------------
function gerarnum(){
  var numero = document.getElementById("numero");

  for (var i = 1; i <= 1000; i++) {
      console.log(numero+i);
   
      
}
}

//---------------------------------------------------ex 5----------------------------------------------------

function imprimir(){
 
  let usuario = {
    cidade: "Joinville",
    estado: "SC",
    bairro: "Centro",
    rua:  "Rua dos Pinheiros",
    numero: 123
  };
  
  let informacoes = document.getElementById("informacoes")
 informacoes.innerHTML = "O usuário mora em " + usuario.cidade + "/" + usuario.estado + ", no bairro " + usuario.bairro + ", na rua " + usuario.rua + " com nº " + usuario.numero;
  }


  //---------------------------------------------------ex 6----------------------------------------------------

   function exibir() {
  const minhaString = "Olá, mundo!";
  console.log(minhaString);
 
    alert(minhaString);
  }

//---------------------------------------------------ex 7----------------------------------------------------

function calcular(){
  var notaUsuario = document.getElementById("nota").value;
  var informarnota = document.getElementById("avaliacaofinal")
if (notaUsuario >= 7) {
  informarnota.innerHTML = "O usuário passou de ano.";

} else if (notaUsuario >= 5) {
  informarnota.innerHTML ="O usuário ficou de recuperação.";
} else {
  informarnota.innerHTML ="O usuário foi reprovado";
}
}