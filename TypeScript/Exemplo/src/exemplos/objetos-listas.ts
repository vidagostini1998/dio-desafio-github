const pessoa = {
    nome:'Vinicius',
    idade:23,
    profissao:'DEV'
}

pessoa.idade = 20;

const andre:{nome:string,idade:Number,profissao:string}={
    nome:'Andre',
    idade:25,
    profissao:'dev'
}

enum Profissao{
    Professor,
    Atriz,
    DEV
}

interface Pessoa{
    nome:string,
    idade:number,
    profissao?:Profissao
}

interface Estudante extends Pessoa{
    materias:string[]
}

const vanessa: Pessoa = {
    nome:'Vanessa',
    idade:23,
    profissao:Profissao.DEV
}

const maria: Estudante = {
    nome:'Maria',
    idade:23,
    profissao:Profissao.DEV,
    materias:['Matematica','Programação']
}

const monica: Estudante = {
    nome:'Monica',
    idade:23,
    materias:['Matematica','Programação']
}

function listar(lista:string[]){
    for(const item of lista){
        console.log('- ', item);
    }
}

listar(monica.materias)