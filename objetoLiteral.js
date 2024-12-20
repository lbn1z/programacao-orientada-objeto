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

// user.exibirInfos()

const exibir = user.exibirInfos;

const exibirNome = exibir.bind(user);

exibirNome()