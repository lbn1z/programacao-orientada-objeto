import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const novoUser = new User("Ana", "l@l.com", "2024-01-04")
console.log(novoUser.exibirInfos());
novoUser.nome = "Maria"
console.log(novoUser.nome);

// novoUser.nome = "Carol"
// console.log(novoUser.exibirInfos());

//const novoAdmin = new Admin("Fernando", "a@a.com", "2024-01-02")
//console.log(novoAdmin.nome);
