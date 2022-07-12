

interface IAnimal{
    nome: string;
    tipo: 'terrestre' | 'aquatico';
    domestico:boolean;
}

interface IFelino extends IAnimal{
    visaoNoturna: boolean;

}

interface Icanino extends IAnimal{
    porte: 'pequeno' | 'Medio' | 'grande';
}

type IDomestico = IFelino | Icanino;

const animal: IDomestico = {
    nome: 'Cachorro',
    tipo: 'terrestre',
    domestico:true,
    porte:'Medio',
}
