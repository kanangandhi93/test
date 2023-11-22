import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CardDirective } from './card.directive';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  standalone: true,
  imports: [NgIf, NgFor, NgTemplateOutlet, CardDirective],
})
export class CardComponent<T> {
  @Input() list: T[] = [];
  @Input() customClass = '';
  @Output() public add = new EventEmitter<void>();
  @ContentChild(CardDirective) templateRef!: CardDirective<T>;
}
