function log(message : string){
    console.log(message);
}

log('aaa');

//assim declaramos uma variavel, ambos tem o mesmo resultado
let hue : Array<string>  = ['ola', 'teste'];
let hue2 : [string]  = ['ola', 'teste'];

/*
Escrevemos um arquivo com extensao ".ts", que eh compilado usando o programa "tsc" typescript compiller
Gerando assim um arquivo javascript puro

Inferrencia de tipo.
O typescript permite agora a utilização de tipos de dados como no parametro da funcao log
Permite os tipos:
string
number
boolean
arrays
any (qualquer um)

*/