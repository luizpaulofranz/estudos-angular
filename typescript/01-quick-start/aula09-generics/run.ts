/* 
Assim criamos e usamos uma classe generica
*/

import { Dao } from "./dao";
import { Animal } from "../aula07-classes/animal";
import { Cavalo } from "../aula07-classes/cavalo";

let dao: Dao<Animal> = new Dao<Animal>();

//podemos usar inclusive seus subtipos
let animal:Cavalo = new Cavalo("Faísca");



dao.insert(animal);