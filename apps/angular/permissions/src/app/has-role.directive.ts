import {
  Directive,
  effect,
  inject,
  input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Role } from './user.model';
import { UserStore } from './user.store';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[hasRole], [hasRoleSuperAdmin]',
  standalone: true,
})
export class HasRoleDirective {
  readonly hasRole = input<Role[] | Role>();
  readonly hasRoleSuperAdmin = input<boolean>(false);

  private readonly userStore = inject(UserStore);
  private readonly vcr = inject(ViewContainerRef);
  private readonly templateRef = inject(TemplateRef);

  constructor() {
    effect(() => {
      const user = this.userStore.user();
      this.vcr.clear();
      if (this.hasRoleSuperAdmin()) {
        if (user?.isAdmin) {
          this.vcr.createEmbeddedView(this.templateRef);
        }
      } else if (this.hasRole()) {
        if (this.userStore.matches(this.hasRole())) {
          this.vcr.createEmbeddedView(this.templateRef);
        }
      } else {
        this.vcr.createEmbeddedView(this.templateRef);
      }
    });
  }
}
