import { Component, signal } from '@angular/core';
import { PlaceholderComponent } from './placeholder.component';
import { TopComponent } from './top.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PlaceholderComponent, TopComponent],
  template: `
    <div class="h-screen bg-gray-500">
      @if (topLoaded()) {
        <app-top />
      } @else {
        <app-placeholder />
        <button
          class="rounded-sm border border-blue-500 bg-blue-300 p-2"
          (click)="topLoaded.set(true)">
          Load Top
        </button>
      }
    </div>
  `,
})
export class AppComponent {
  topLoaded = signal(false);
}
