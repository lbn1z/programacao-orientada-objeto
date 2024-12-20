const user = {
    nome: "Leonardo",
    email: "l@l.com",
    nascimento: "13/04/1998",
    role: "estudante",
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email);
    },
};

const admin = {
    nome: "Luiz",
    email: "l@l.com",
    nascimento: "13/04/1998",
    role: "admin",
    ativo: true,
    criarCurso: function() {
        console.log('Curso criado');
    }
}

Object.setPrototypeOf(admin, user)
admin.exibirInfos();
admin.criarCurso();