type input = number | string;

function somarvalores(n1:input,n2:input){
    if(typeof n1 == "string" || typeof n2 == "string"){
        return n1.toString() + n2.toString();
    }
    return n1+n2;
}

console.log(somarvalores(1,5));
console.log(somarvalores('Ola',', tudo bem?'));