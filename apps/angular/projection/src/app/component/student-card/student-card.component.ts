import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FakeHttpService,
  randStudent,
} from '../../data-access/fake-http.service';
import { StudentStore } from '../../data-access/student.store';
import { ListItemTemplateDirective } from '../../directives/list-item-template/list-item-template.directive';
import { CardListInterface } from '../../interfaces/card-list.interface';
import { CardComponent } from '../../ui/card/card.component';

@Component({
  selector: 'app-student-card',
  template: `<app-card
    [list]="students$ | async"
    customClass="bg-light-green"
    (addButtonClicked)="handleAdd()"
    (deleteButtonClicked)="handleDelete($event)">
    <img role="card-image" src="assets/img/student.webp" width="200px" />
    <ng-template list-option-tmp let-item="item">
      {{ item.firstname }}
      <button (click)="handleDelete(item.id)">
        <img class="h-5" src="assets/svg/trash.svg" />
      </button>
    </ng-template>
  </app-card>`,
  standalone: true,
  styles: [
    `
      :host {
        --bg-light-green: rgba(0, 250, 0, 0.1);
      }
    `,
  ],
  imports: [CardComponent, ListItemTemplateDirective, CommonModule],
})
export class StudentCardComponent implements OnInit, CardListInterface {
  students$ = this.store.students$;

  constructor(private http: FakeHttpService, private store: StudentStore) {}

  ngOnInit(): void {
    this.http.fetchStudents$.subscribe((s) => this.store.addAll(s));
  }

  handleAdd(): void {
    this.store.addOne(randStudent());
  }

  handleDelete(id: number) {
    this.store.deleteOne(id);
  }
}
