let button1 = document.getElementById('button');
let input11 = document.getElementById('input1') as HTMLInputElement;
let input21 = document.getElementById('input2') as HTMLInputElement;

function somarNumeros(n1:number,n2:number){
    if(typeof n1 === 'number' && typeof n2 ==='number'){
        return n1+n2;
    }else{
        return Number(n1)+Number(n2);
    }
    
}
if(button1){
    button1.addEventListener('click',()=>{
        if(input1 && input2){
            console.log(somarNumeros(Number(input11.value),Number(input21.value)));
        }
    })
}
