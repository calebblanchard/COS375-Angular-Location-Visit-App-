import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { ViewComponent } from './view/view.component';

@Injectable()
export class ViewFirstGuard {
  private firstNavigation = true;
  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.firstNavigation) {
      this.firstNavigation = false;
      if (route.component !== ViewComponent) {
        this.router.navigateByUrl('/');
        return false;
      }
    }
    return true;
  }
}
