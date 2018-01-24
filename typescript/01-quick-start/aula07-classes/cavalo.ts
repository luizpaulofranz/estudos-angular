/**
 * Exemplo de heranca
 */

import {Animal} from './animal';

export class Cavalo extends Animal{

    //repassamos para o construtor da classe mae
    constructor(name:string){
        super(name);
    }

    //sobrescrevemos o metodo
    
    public mover(distancia:number):void {
        console.log('Cavalgando...');
        //chamamos o metodo da nossa classe mae
        super.mover(distancia);
    }
}