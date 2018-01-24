/*
Esse eh o arquivo que inicializa a porra toda, tem q ser importado no html
 */

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from "./app.module";

//o Dynamic significa que o type script é compilado em tempo de execucao, isso so 
//é recomendado em ambiente de desenvolvimento, pois perdemos em desempenho.

//Para produção, tiramos esse Dynamic, para realizarmos a pré-compilação dos type scripts.
const platform = platformBrowserDynamic();

//indicamos qual o principal modulo da nossa aplicacao, o modulo root
platform.bootstrapModule(AppModule);