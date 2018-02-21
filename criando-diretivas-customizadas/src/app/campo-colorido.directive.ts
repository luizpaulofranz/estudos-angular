import { Directive, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]',
  // com isso criamos uma instancia dessa diretiva, com esse nome
  exportAs: 'campoColorido'
})
export class CampoColoridoDirective {

  /* com isso fazemos o binding para as propriedades do elemento*/
  @HostBinding('style.backgroundColor')
  corFundo: string;

  // com isso passamos dados para dentro da diretiva
  // mudamos o nome do input para nao precisar criar outra propriedade
  @Input('appCampoColorido') cor: string;

  // essas variaveis abaixo nao sao necessarias quando usamos o @Hostbinding
  constructor(
    // da acesso ao elemento html que recebe essa diretiva
    // private elementRef: ElementRef,
    // esse eh o cara que faz as alteracoes visuais no elemento acima
    // private renderer: Renderer2
  ) {   }

  /*essa anotacao captura um evento, e a funcao abaixo eh executada*/
  @HostListener('focus')
  onFocus() {
    this.corFundo = this.cor;
    /*this.renderer.setStyle(this.elementRef.nativeElement,
      'background-color', 'yellow');*/
  }

  // blur eh perde o foco
  @HostListener('blur')
  focusOut() {
    this.corFundo = 'transparent';
    /*this.renderer.setStyle(this.elementRef.nativeElement,
      'background-color', '');*/
  }

}
