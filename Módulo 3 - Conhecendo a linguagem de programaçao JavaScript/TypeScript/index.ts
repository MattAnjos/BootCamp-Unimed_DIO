/*//Interface

interface IAnimal{
    nome:string;
    tipo: "terrestre" | "aquatico";
    executarRugido(alturaEmDecibeis:number):void;
}

//Extende as regras de dados da interface IAnimal

interface IFelino extends IAnimal{
    visaoNoturna: boolean;
}

interface ICachorro extends IAnimal{
    porte: "pequeno" | "medio" | "grande";
}


const animal:IAnimal={
    nome:"Elefante",
    tipo:"terrestre",
    executarRugido: (alturaEmDecibeis)=>(`O ${this.nome} ruge com ${alturaEmDecibeis} db`) //Usando Arrow function
}

console.log(animal.executarRugido(1));

const felino: IFelino={
    nome:"gato",
    tipo:"terrestre",
    visaoNoturna:true,
    executarRugido(alturaEmDecibeis) {
        return (`O ${this.nome} ruge com ${alturaEmDecibeis} db`);//usando funçao normal
    }
}

console.log(felino.executarRugido(20));

//Type

type IDomestico = IFelino | ICachorro; // Coloca como parametros opcionais de um ou outro

const cachorro: IDomestico = {
    nome:"cachorro",
    tipo:"terrestre",
    //porte:"grande",
    visaoNoturna:true,
    executarRugido(alturaEmDecibeis) {
        return (`O ${this.nome} ruge com ${alturaEmDecibeis} db`);//usando funçao normal
    }
}
*/

/*//Tratando Tag Input

const input= document.getElementById("input") as HTMLInputElement;

input.addEventListener('input',(event)=>{
    const i=event.currentTarget as HTMLInputElement;
    console.log(i.value);
})
*/
/*
//Generic Type

function adicionaApendiceLista<T>(array:T[],valor:T){
    return array.map(()=>valor);
}

adicionaApendiceLista([1,2,3,4],4)

//Condicionais com tipos

interface IUsuario{
    id: string;
    email: string;
}

interface IAdmin extends IUsuario{
    cargo: 'gerente' | 'coordenador' | 'supervisor';
}

function redireciona(usuario: IUsuario|IAdmin){
    if('cargo'in usuario){
        //redireciona para a area de administraçao
    }
}
        //redirecionar para a area do usuario

*/
/*
//parametros opcionais com '?'

interface IUsuario{
    id: string;
    email: string;
    cargo?: 'gerente' | 'coordenador' | 'supervisor' | 'funcionario';
}

function redireciona(usuario: IUsuario){
    if(usuario.cargo){ //verifica se a propriedade cargo foi utilizada
        //redireciona para a area de administraçao
    }
}
        //redirecionar para a area do usuario

//readonly

interface ICachorro{
    nome:string;
    idade:number;
    parqueFavorito?:string;
}

type CachorroSomenteLeitura = {
    readonly[k in keyof ICachorro]-?:ICachorro[k];
}

class MeuCachorro implements  CachorroSomenteLeitura{
    idade;
    nome;
    parqueFavorito;

    constructor(nome,idade){
        this.nome=nome;
        this.idade=idade;
    }
}

const cao= new MeuCachorro('Apolo',14);

*/
/*
//importando bibliotecas em TS

import $ from 'jquery';

$.fn.extend({
    novaFunçao(){
        console.log('chamou nova funçao');
    }
});

$('body').novaFunçao();

*/

// omite

interface Pessoa{
    nome:string;
    idade:number;
    nacionalidade:string;
}

interface Brasileiro extends Omit<Pessoa,'nacionalidade'>{

}

const brasileiro:Brasileiro ={
    idade:34,
    nome:'Marcos',
    
}