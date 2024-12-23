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
    
    get nome() {
        return this.#nome
    }

    get email() {
        return this.#email
    }
    
    get nascimento() {
        return this.#nascimento
    }
    
    get role() {
        return this.#role
    }
    
    get ativo() {
        return this.#ativo
    }
    
    set nome(novoNome) {
        if (novoNome === "") {
            throw new Error('Formato do nome não é valido')
        }
        this.#nome = novoNome
    }

    //exibirInfos() {
    //  return `${this.nome}, ${this.email}, ${this.nascimento}`
    //}

    exibirInfos() {
        if (this.role === "estudante") {
            return `Dados dos estudantes: ${this.nome}, ${this.email} e ${this.nascimento}`
        }
        if (this.role === "admin") {
            return `Dados do admin: ${this.nome}, ${this.email} e ${this.nascimento}. ${this.role}`
        }
        if (this. role === "docente") {
            return `Dados do docente: ${this.nome}, ${this.email} e ${this.nascimento}. ${this.ativo}`
        }
    }
    static exibirInfosGenericas(nome, email) {
        return `${nome}, ${email}`
    }
}


const novoUser = new User('Leonardo', 'l@l.com', '2024-01-01')


// console.log(novoUser);
// console.log(novoUser.exibirInfos());

// console.log(User.prototype.isPrototypeOf(novoUser));

