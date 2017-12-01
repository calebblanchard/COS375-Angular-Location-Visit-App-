import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot,
            Router } from '@angular/router';
import { AuthService } from '../model/auth.service';

/*
To prevent the application from navigating directly to the administration features, which will lead to
HTTP requests being sent without a token, I added a file called auth.guard.ts in the SportsStore/src/
app/admin folder and defined the route guard shown in Listing 9-12.
 */
@Injectable()
export class AuthGuard {
  constructor(private router: Router,
              private auth: AuthService) { }
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {
    if (!this.auth.authenticated) {
      this.router.navigateByUrl('/admin/auth');
      return false;
    }
    return true;
  }
}
