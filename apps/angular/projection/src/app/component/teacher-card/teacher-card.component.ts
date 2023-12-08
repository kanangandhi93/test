import { Component, inject } from '@angular/core';
import { randTeacher } from '../../data-access/fake-http.service';
import { TeacherStore } from '../../data-access/teacher.store';
import { CardComponent } from '../../ui/card/card.component';
import { ListItemComponent } from '../../ui/list-item/list-item.component';
import { AsyncPipe, NgIf } from '@angular/common';
import { CardContentDirective } from '../../dicertives/card-content.directive';
import { CardButtonsDirective } from '../../dicertives/card-buttons.directive';

@Component({
  selector: 'app-teacher-card',
  template: `
    <app-card [list]="teachers()" customClass="bg-light-red">
      <img src="assets/img/teacher.png" width="200px" alt="" />

      <ng-template let-teacher appCardContent>
        <app-list-item
          [name]="teacher.firstname"
          (deleteEmitter)="deleteTeacher(teacher.id)">
        </app-list-item>
      </ng-template>

      <ng-template appCardButtons>
        <button
          class="border border-blue-500 bg-blue-300 p-2 rounded-sm"
          (click)="addNewTeacher()">
          Add
        </button>
      </ng-template>
    </app-card>
  `,
  styles: [
    `
      :host::ng-deep .bg-light-red {
        background-color: rgba(250, 0, 0, 0.1);
      }
    `,
  ],
  standalone: true,
  imports: [
    CardComponent,
    NgIf,
    AsyncPipe,
    ListItemComponent,
    CardContentDirective,
    CardButtonsDirective,
  ],
})
export class TeacherCardComponent {
  private readonly _store = inject(TeacherStore);
  protected teachers = this._store.teachers;

  addNewTeacher(): void {
    this._store.addOne(randTeacher());
  }

  deleteTeacher(id: number): void {
    this._store.deleteOne(id);
  }
}
