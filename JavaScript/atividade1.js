function verifica(a,b){
    var igual="";
    var compara="";
    (a==b) ? igual = "Os numeros "+a+" e "+b+" são iguais.":igual = "Os numeros "+a+" e "+b+" não são iguais.";
    
    var soma = a+b;
    if(soma>10){
        compara = "Maior";
    }else{
        compara = "Menor"
    }

    if(soma<10){
        compara1 = "Menor";
    }else{
        compara1 = "Maior"
    }

    var mm = "Sua soma é "+soma+", que é "+compara+" que 10 e "+compara1+" que 20";

    console.log(""+igual+""+mm);
    
}

verifica(20,0);