export class Contato{

    /** 
     * Podemos declarar os atributos da classe direto no construtor, evitando linhas de codigo
    */
    //removemos do construtor para nao inicializar com id zero
    public id: number

    constructor(
        public nome: string,
        public email: string,
        public telefone: string
    ){}
}
