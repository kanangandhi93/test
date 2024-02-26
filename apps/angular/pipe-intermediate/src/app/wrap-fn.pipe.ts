import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wrapFn',
  standalone: true,
})
export class WrapFnPipe implements PipeTransform {
  transform<R, F extends (...args: never[]) => R>(
    func: F,
    ...args: Parameters<F>
  ): R {
    return func(...args);
  }
}