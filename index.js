import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const novoUser = new User("Ana", "l@l.com", "2024-01-04")
console.log(novoUser.exibirInfos());

const dadosFicticios = User.exibirInfosGenericas("Cassio", "c@c.com")
console.log(dadosFicticios);

//const novoAdmin = new Admin("Maria", "m@m.com", "2024-01-05")
//console.log(novoAdmin.exibirInfos());

//const novoDocente = new Docente("Julia", "j@j.com", "2024-01-06")
//console.log(novoDocente.exibirInfos());