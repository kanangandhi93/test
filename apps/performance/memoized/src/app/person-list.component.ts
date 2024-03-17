import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { FibonacciPipe } from './fib.pipe';
import { Person } from './person.model';

@Component({
  selector: 'app-person-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    FibonacciPipe,
  ],
  template: `
    <h1 class="text-center font-semibold" title="Title">
      {{ title | titlecase }}
    </h1>

    <mat-form-field class="w-4/5">
      <input
        placeholder="Add one member to the list"
        matInput
        type="text"
        [(ngModel)]="label" />
    </mat-form-field>

    <mat-list class="flex w-full">
      <mat-list-item *ngFor="let person of persons">
        <div MatListItemLine class="flex justify-between">
          <h3>{{ person.name }}</h3>
          <mat-chip>{{ person.fib | Fibonacci: fibObject }}</mat-chip>
        </div>
      </mat-list-item>
    </mat-list>
  `,
  host: {
    class: 'w-full flex flex-col items-center',
  },
})
export class PersonListComponent {
  @Input() persons: Person[] = [];
  @Input() title = '';
  label = '';
  fibObject: any = {};
}
