class Cliente {
    constructor(nome, email, cpf) {
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
    }

    relatorio = () => {
        return `Nome: ${this.nome}\nCPF: ${this.cpf}\nEmail: ${this.email}`;
    };
}


const cliente1 = new Cliente("Affonso Davi", "affonsodavi@gmail", "123.456.789-00");
console.log(cliente1.relatorio());