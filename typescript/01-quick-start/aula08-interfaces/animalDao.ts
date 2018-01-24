
import { DaoInterface } from "./dao.interface";
import { Animal } from "../aula07-classes/animal";

//assim implementamos uma interface
export class AnimalDao implements DaoInterface {

    tableName: string = "animal";

    insert(object: Animal): boolean {
        console.log("Entrou no inserir da classe AnimalDao!");
        return true;
    }

    update(object: Animal): boolean {
        return true;
    }

    delete(id: number): boolean {
        return true;
    }

    find(id: number):Animal {
        return null;
    }

    findAll(): [Animal] {
        return [new Animal("Rex")]
    }


}