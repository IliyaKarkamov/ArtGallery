import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {AuthenticationService} from '../../services/account/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {
  constructor(private router: Router, private authenticationService: AuthenticationService) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return !this.authenticationService.isAuthenticated();
  }
}
