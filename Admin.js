import User from "./User.js";

export default class Admin extends User {
    constructor(nome, email, nascimento, role = "admin", ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    criarCurso(nomeCurso, qtdVagas) {
        return `O Curso ${nomeCurso} foi criado com ${qtdVagas} vagas`
    }
}

// const novoAdmin = new Admin("Luiz", "a@a.com", "2024-01-02")

// console.log(novoAdmin);
// console.log(novoAdmin.criarCurso("Javascript", 40));

