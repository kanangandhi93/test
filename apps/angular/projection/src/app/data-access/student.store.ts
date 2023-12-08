import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Student } from '../model/student.model';

@Injectable({
  providedIn: 'root',
})
export class StudentStore {
  private students = new BehaviorSubject<Student[]>([]);
  // studentSignal = signal(new Student()[]);
  students$ = this.students.asObservable();

  addAll(students: Student[]) {
    // this.studentSignal.update(students)
    this.students.next(students);
  }

  addOne(student: Student) {
    this.students.next([...this.students.value, student]);
  }

  deleteOne(id: number) {
    this.students.next(this.students.value.filter((s) => s.id !== id));
  }
}
