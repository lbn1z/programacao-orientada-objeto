import User from "./User.js";

export default class Docente extends User {
    constructor(nome, email, nascimento, role = "docente", ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    aprovarEstudante(nomeAluno, curso) {
        return `O ${nomeAluno} foi aprovado no curso de ${curso}, resposável pelo curso ${this.nome} `
    }
}

// const novoDocente = new Docente("Ana", "a@a.com", "2024-01-03")

// console.log(novoDocente.aprovarEstudante('Fernanda', 'Engenharia de Software'));

