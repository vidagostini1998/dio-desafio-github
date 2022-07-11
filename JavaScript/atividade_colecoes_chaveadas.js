// Atividade 1

function getAdmins(map){
    let admins = [];
    for ([key,value] of map) {
        if(value === 'Admin'){
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Vinicius','Admin');
usuarios.set('Vini','Admin');
usuarios.set('Vinic','User');
usuarios.set('Vinici','User');

console.log(getAdmins(usuarios));


// Atividade 2

const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr){
    const mySet = new Set(arr);

    return[...mySet];
}

console.log(valoresUnicos(meuArray));