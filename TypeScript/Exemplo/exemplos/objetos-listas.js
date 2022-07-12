"use strict";
const pessoa = {
    nome: 'Vinicius',
    idade: 23,
    profissao: 'DEV'
};
pessoa.idade = 20;
const andre = {
    nome: 'Andre',
    idade: 25,
    profissao: 'dev'
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professor"] = 0] = "Professor";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["DEV"] = 2] = "DEV";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.DEV
};
const maria = {
    nome: 'Maria',
    idade: 23,
    profissao: Profissao.DEV,
    materias: ['Matematica', 'Programação']
};
const monica = {
    nome: 'Monica',
    idade: 23,
    materias: ['Matematica', 'Programação']
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(monica.materias);
