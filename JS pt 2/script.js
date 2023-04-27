//------------------------------------------ex1-----------------------------------------------------------
function numeroMaior() {
    var numerosString = document.getElementById("numeros").value;
    var numeros = numerosString.split(",").map(function (item) {//transforma o array em string tirando as virgulas
        //e o map percorre cada item do array retornando novos resultados
        return parseInt(item.trim());//parseint transforma string em int e o trim retira qlqr espaço para q dê tudo certo
    });
    var maximo = numeros[0];
    for (var i = 1; i < numeros.length; i++) {//faz o papel de contar os caracteres
        if (numeros[i] > maximo) {
            maximo = numeros[i];
        }
    }
    document.getElementById("maximo").innerHTML = maximo;
}

//------------------------------------------ex2-----------------------------------------------------------

function contaCaracteres() {
    var stringsInseridas = document.getElementById("strings");
    var strings = stringsInseridas.value.split(" ");//transforma o array em string tirando os espaços
    var totalCaracteres = 0;

    for (var i = 0; i < strings.length; i++) {
        totalCaracteres += strings[i].length;//faz o papel de contar os caracteres
    }

    document.getElementById("resultado").innerHTML = totalCaracteres;
}

//-------------------------------------------ex3----------------------------------------------------------

const pessoas = {};
let = contador = 0;
let contadorPessoas = 0;

function adicionaPessoa() {
    const nomeEscrito = document.getElementById("nome");
    const emailEscrito = document.getElementById("email");
    const nome = nomeEscrito.value;
    const email = emailEscrito.value;

    if (nome && email && contador < 3) {
        pessoas[nome] = email;//nome esta sendo usado como propriedade pelo objeto pessoas e o email é o valor
        contador++;
        contadorPessoas++;

        alert(`Pessoa adicionada: ${nome} (${email})`);

        nomeEscrito.value = "";
        emailEscrito.value = "";

    } else if (contador === 3) {
        adicionarBtn.disabled = true;
        alert(`Você atingiu o limite de pessoas que podem ser adicionadas.`);


    } else {
        alert(`Por favor, preencha o nome e o e-mail da pessoa.`);
    }

    if (contadorPessoas < 3) {
        alert(`Você ainda precisa adicionar mais ${3 - contadorPessoas} pessoas.`);
    }

}

function buscaEmail() {
    const buscaNome = document.getElementById("busca");
    const nome = buscaNome.value;
    const emailEncontrado = document.getElementById("emailAchado");

    if (pessoas[nome]) {
        emailEncontrado.innerHTML = `O e-mail de ${nome} é: ${pessoas[nome]}`;// $ é usado para informar o valor que esta sendo cahamado
    } else {
        emailEncontrado.innerHTML = `Não foi possível encontrar o e-mail de ${nome}.`;
    }
}

//--------------------------------------------ex4---------------------------------------------------------

let frutas = ["maçã", "banana", "laranja", "abacaxi", "manga"];

function verificarFruta() {
    let fruta = document.getElementById("fruta").value;
    if (frutas.includes(fruta)) {
        document.getElementById("conferir").innerHTML = `${fruta} está presente no array de frutas.`;
    } else {
        document.getElementById("conferir").innerHTML = `${fruta} não está presente no array de frutas.`;
    }
}

//--------------------------------------------ex5---------------------------------------------------------

function calcularDobro() {
    let numero = document.getElementById("numero").value;
    let resultado = numero * 2;
    document.getElementById("dobro").innerHTML = `O dobro de ${numero} é ${resultado}.`;
}

//--------------------------------------------ex6---------------------------------------------------------

function calcularDobros() {
    let numeros = document.getElementById("num").value.split(",");
    let resultado = [];

    for (let i = 0; i < numeros.length; i++) {
        resultado.push(Number(numeros[i]) * 2);//push insere o valor dos numeros dobrados no array novo
    }

    document.getElementById("resultados").innerHTML = `O dobro dos números é: ${resultado.join(", ")}`;
}

//--------------------------------------------ex7---------------------------------------------------------

// Array de animais
var animais = ["Leão", "Elefante", "Girafa", "Tigre", "Macaco"];

// Função para encontrar a posição de um animal no array
function encontrar() {
    var animal = document.getElementById("animal").value; // Captura o animal informado pelo usuário
    var posicao = animais.indexOf(animal); // Verifica a posição do animal no array

    if (posicao === -1) { // Se a posição for -1, significa que o animal não está no array
        document.getElementById("animalEcontrado").innerHTML = "O animal não está na lista.";
    } else { // Caso contrário, mostra a posição do animal no array (começando em 1)
        document.getElementById("animalEcontrado").innerHTML = `O animal está na posição ${posicao + 1} do array`;
    }
}

//--------------------------------------------ex8---------------------------------------------------------

function converter() {
    var texto = document.getElementById("texto").value;
    var resultado = texto.toUpperCase(); //deixa toda a string em letra maiuscula
    document.getElementById("maiuscula").innerHTML = `Texto em maiúsculas: ${resultado}`;
}

//--------------------------------------------ex9---------------------------------------------------------

function armazenaVariavel() {
    var valor = document.getElementById("varInput").value;
    var novaVariavel = valor;
    document.getElementById("novoValor").innerHTML = novaVariavel;
    return novaVariavel;
}

//--------------------------------------------ex1 extra---------------------------------------------------------

function contaVogais() {
    var string = document.getElementById("stringInserida").value;
    var numVogais = 0;
    for (var i = 0; i < string.length; i++) {
        if (/[aeiouAEIOU]/.test(string[i])) {//usando uma regex para testar se à vogais, e o .test para
            //retornar true ou false em caso de ter vogal
            numVogais++;
        }
    }
    document.getElementById("numVogais").innerHTML = numVogais;
    return numVogais;
}

//--------------------------------------------ex2 extra---------------------------------------------------------

function calculaFatorial() {
    var num = document.getElementById("numInserido").value;
    var fatorial = 1;
    for (var i = 1; i <= num; i++) {
        fatorial *= i;
    }
    document.getElementById("fatorial").innerHTML = fatorial;
    return fatorial;
}


//--------------------------------------------ex3 extra---------------------------------------------------------

function validaInscricao() {
    if (document.frmInscr.txtnome.value == "") {
        alert("Preencha o campo Nome.");
        document.frmInscr.txtnome.focus();
        return false;
    } else if (document.frmInscr.txtemail.value == "") {
        alert("Preencha o campo Email.");
        document.frmInscr.txtemail.focus();
        return false;
    }
    return true;
}

//--------------------------------------------ex4 extra---------------------------------------------------------

function validaIdadeAltura() {
    var idade = document.getElementById("idade").value;
    var altura = document.getElementById("altura").value;
    if (idade === "") {
        alert("Preencha o campo Idade.");
        document.frmInscricao.txtidade.focus();
        return false;
    } else if (idade < 18 || idade > 60) {
        alert("A idade deve ter entre 18 e 60 anos.");
        document.frmInscricao.txtidade.focus();
        return false;
    } else if (altura === "") {
        alert("Preencha o campo Altura.");
        document.frmInscricao.txtaltura.focus();
        return false;
    } else if (altura < 150 || altura > 200) {
        alert("A altura deve estar entre 150 e 200 centimetros.");
        document.frmInscricao.txtaltura.focus();
        return false;
    }
    return true;
}