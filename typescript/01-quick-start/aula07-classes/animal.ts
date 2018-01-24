/*
O "export" indica que essa classe eh um modulo, ou seja, pode ser usada (importada)
em outros arquivos.
*/ 

export class Animal{
    private name: string;

    constructor(nome:string){
        this.name = nome;
    }

    public mover(distanciaEmMetros:number):void{
        //usamos a crase para colocar uma expressao JS
        console.log(`${this.name} moveu ${distanciaEmMetros} metros!`);
    }
}