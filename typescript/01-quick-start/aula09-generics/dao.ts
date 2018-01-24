/*
Assim criamos uma classe e uma interface genericas
 */

import { DaoInterface } from "./dao.interface";

//assim implementamos uma interface
export class Dao<T> implements DaoInterface<T> {

    tableName: string = '';

    insert(object: T): boolean {
        console.log("Entrou no inserir da classe AnimalDao!");
        return true;
    }

    update(object: T): boolean {
        return true;
    }

    delete(id: number): boolean {
        return true;
    }

    find(id: number):T {
        return null;
    }

    findAll(): [T] {
        return [null]
    }


}