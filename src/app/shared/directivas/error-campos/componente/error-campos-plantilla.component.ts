import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';

@Component({
  templateUrl: './error-campos-plantilla.component.html',
  styles: [`.hide {
    display: none;
} `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorCamposPlantillaComponent {
  mensajeError;
  ocultar = true;
    
  constructor(private cdr: ChangeDetectorRef) {
  }

  @Input()
  set text(value) {
    if (value !== this.mensajeError) {
      this.mensajeError = value;
      this.ocultar = !value;
      this.cdr.detectChanges();
    }
  }
}

