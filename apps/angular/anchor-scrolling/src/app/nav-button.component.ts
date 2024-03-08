/* eslint-disable @angular-eslint/component-selector */
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'nav-button',
  standalone: true,
  template: `
    <div [routerLink]="href" [fragment]="fragment">
      <ng-content></ng-content>
    </div>
  `,
  imports: [RouterModule],
  host: {
    class: 'block w-fit border border-red-500 rounded-md p-4 m-2 ',
  },
})
export class NavButtonComponent {
  @Input() href = '';
  @Input() fragment?: string = undefined;
}
