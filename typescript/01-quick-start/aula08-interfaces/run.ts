import { DaoInterface } from "./dao.interface";
import { AnimalDao } from "./animalDao";
import { Animal } from "../aula07-classes/animal";

let dao: DaoInterface;
dao = new AnimalDao();

let animal:Animal = new Animal("Rex");

dao.insert(animal);