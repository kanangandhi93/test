import { Component } from '@angular/core';

@Component({
  selector: 'app-top',
  standalone: true,
  template: `
    I am a very heavy, expensive component that should be lazy loaded.
  `,
  styles: `
    :host {
      display: grid;
      padding: 20px;
      background-color: #f0f0f0;
      height: 50%;
    }
  `,
})
export class TopComponent {}
