import { Directive, ViewContainerRef } from '@angular/core';

/* eslint-disable @angular-eslint/directive-selector */
@Directive({
  selector: '[validar]',
})
export class MensajeErrorCamposContenedorDirective {
  constructor(public vcr: ViewContainerRef) {}
}
