export interface DaoInterface{

    tableName:string;

    //o any eh como o object no Java
    insert(object:any):boolean;
    update(object:any):boolean;
    delete(id:number):boolean;
    find(id:number):any;
    //um array de objetos
    findAll():[any];
}