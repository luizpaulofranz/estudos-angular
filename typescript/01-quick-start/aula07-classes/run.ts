//esse eh o import do typescript
import { Animal } from './animal';
import { Cavalo } from "./cavalo";

//let eh para declararmos variaveis, e assim temos um objeto
let a = new Animal("Rex");
a.mover(5);

let c = new Cavalo("Faísca");
c.mover(35);