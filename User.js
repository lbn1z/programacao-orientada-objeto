export default class User {
    // # coloca o atributo privado
    #nome
    #email
    #nascimento 
    #role 
    #ativo
    constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || "estudante"
        this.#ativo = ativo
    }

    exibirInfos() {
        return `${this.#nome}, ${this.#email}, ${this.#nascimento}`
    }
}

const novoUser = new User('Leonardo', 'l@l.com', '2024-01-01')

// console.log(novoUser);
// console.log(novoUser.exibirInfos());

// console.log(User.prototype.isPrototypeOf(novoUser));

