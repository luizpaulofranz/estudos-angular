/*
 O generics serve para gerarmos classes parametrizadas.
Passamos o tipo T como parametro na hora de criar o objeto.

O T é uma convencao de nomenclatura, e significa Tipo, porem poderiamos escrever qlq coisa.
Temos outras convencoes, mas a verdade eh que o que colocamos ali nao importa.

Podemos tbm nao deixar que nosso parametro seja fixo, se colocassemos
DaoInterface<?>, o "?" significa qlq tipo, ou seja, poderiamos inserir uma String e fazer update com um int
Ou seja, ele deixa os parametros soltos, a cargo do usuario da classe, isso seria o mesmo que colocar 
um any ou object nas declaracoes de metodos e variaveis.

Mas isso tem vantagens, podemos fazer algo como <? extends number>, assim o parametro so podera ser
numerico


 */

export interface DaoInterface<T>{

    tableName:string;

    //o any eh como o object no Java
    insert(object:T):boolean;
    update(object:T):boolean;
    delete(id:number):boolean;
    find(id:number):T;
    //um array de objetos
    findAll():[T];
}