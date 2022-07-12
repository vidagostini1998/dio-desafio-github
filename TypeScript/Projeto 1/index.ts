/* Tratando TAG INPUT
const input = document.getElementById('input') as HTMLInputElement;

input.addEventListener('input',(event)=>{
    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value);
})
*/

/* Generic types

function adicionaApendiceALista<T>(array:any[],valor:T){
    return array.map(()=>valor);
}

adicionaApendiceALista([1,2,3],1);
*/

/* Condicionais a partir de parametros e ? para variaveis opcionais
interface IUsuario{
    id: string;
    email: string;
    cargo?: 'normal'|'gerente'|'coordenador' | 'supervisor';
}


function redirecione(usuario: IUsuario ){
    if(usuario.cargo){
        //redirecionar(usuario.cargo);
    }

    //redirecionar para area do usuario

}*/

/* Propriedades readyonly e private
interface Cachorro{
    nome:string;
    idade:number;
    parqueFavorito?:string;
}

type CachorroSomenteLeitura = {
    +readonly [k in keyof Cachorro]-?: Cachorro[k];
}

class MeuCachorro implements CachorroSomenteLeitura{
    idade;
    nome;
    parqueFavorito;

    constructor (nome, idade){
        this.idade = idade;
        this.nome = nome;
    }
}

const cao = new MeuCachorro('Cojaque','14');
cao.idade = 8;*/

/* Importar bibliotecas
import $ from 'jquery';

$.fn.extend({
    novaFuncao(){
        console.log('hello');
    }
});

$('body').novaFuncao();
*/

// Omit
interface Pessoa{
    nome:string;
    idade:number;
    nacionalidade:string;
}

interface Brasileiro extends Omit<Pessoa,'nacionalidade'>{

}

