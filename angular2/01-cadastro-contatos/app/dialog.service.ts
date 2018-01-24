import {Injectable} from '@angular/core';

//para injetramos no construtor de outros components
@Injectable()
export class DialogService{

    //o "?:" indica que esse é parametro opcional"
    confirm(message?: string){
        return new Promise(resolve => {
            return resolve(window.confirm(message || 'Você tem certeza disso?'));
        });    
    }
}