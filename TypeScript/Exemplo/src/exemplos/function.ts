function printa(n1: number, n2: number): void {
    console.log(n1 + n2);
}

function somarValoresNumericos(n1: number, n2: number, callback: (numero: number) => number): number {
    let resultado = n1+n2;
    return callback(resultado);
}

function aoQuadrado(num:number):number{
    return num*num;
}

console.log(somarValoresNumericos(1,3,aoQuadrado));