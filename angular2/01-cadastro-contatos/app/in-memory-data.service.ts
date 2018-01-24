import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Contato } from "./contatos/contato.model";

export class InMemoryDataService implements InMemoryDbService{

    createDb():{} {
        let contatos:Contato[] = [
            //objetos do tipo json
            {id: 1, nome: "Maria", email:"maria@gmail.com", telefone:"(00) 2554 8765"},
            {id: 2, nome: "João", email:"joao@gmail.com", telefone:"(00) 2554 6548"},
            {id: 3, nome: "Pedro", email:"pedro@gmail.com", telefone:"(11) 5874 2000"},
            {id: 4, nome: "Ana", email:"ana@gmail.com", telefone:"(14) 2255 5577"},
            {id: 5, nome: "Manuelito", email:"manuel@gmail.com", telefone:"(48) 8877 9987"},
        ];
        // eh o mesmo que {'contatos':contatos}
        return {contatos};
    }

}