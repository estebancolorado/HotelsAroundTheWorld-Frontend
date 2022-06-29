import { Component, Input } from '@angular/core';
import { MenuItem } from '@core/modelo/menu-item';

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styles: [`:host {
    border: 0 solid #e1e1e1;
    border-bottom-width: 1px;
    display:inline-block;
    text-align: right;
    height: 48px;
    padding: 0 16px;
    background-color: var(--soft-blue);
  }

  nav a {
    color: var(--black);
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 48px;
    margin-right: 20px;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
  }

  nav a.router-link-active {
    color: #106cc8;
  }`],
})
export class NavbarComponent {

  @Input() items: MenuItem[];
}
