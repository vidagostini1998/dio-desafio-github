let any:any;

let unknown : unknown;

function jogaErro(erro:string,codigo:number):never{
    throw{
        error:erro,code:codigo
    }
    
}

jogaErro('deu erro',500);