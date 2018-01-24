
//o "T" indica o uso de generics
//e aqui definimos uma interface para as repositorys do nosso sistema
export interface ServiceInterface<T>{
    findAll():Promise<T[]>;
    find(id:number):Promise<T>;
    create(object: T):Promise<T>;
    update(object: T):Promise<T>;
    delete(object: T):Promise<T>;
}