import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: 'toolbar.component.html',
  styles: [`:host {
    background-color: var(--soft-blue);
    border: 0 solid #e1e1e1;
    border-bottom-width: 1px;
    color: rgba(255, 255, 255, 0.87);
    display: block;
    height: 48px;
    padding: 0 16px;
  }

  img
  {
    margin: 0px auto;
    height: 45px;
  }`]
})
export class ToolbarComponent {


}
