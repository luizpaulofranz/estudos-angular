/* Tudo gira em torno dos components no Angular2, ele eh quem vai controlar um pedaço da tela
podemos fazer uma analogia com os controllers.
 */
import {Component} from '@angular/core';

//informamos o Angular q isso eh um componente
@Component({
    moduleId: module.id,
    //esse eh o nome desse componente
    selector:'my-app', //isso vira uma tag html <my-app>
    templateUrl: 'app.component.html',
})
export class AppComponent {

}