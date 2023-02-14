import { Injectable, Pipe } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../services/users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private usersService:UsersService, private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //state: RouterStateSnapshot): Observable<boolean > | Promise<boolean> | boolean {
    
      if (!this.usersService.isLogged){
        this.router.navigate(['login'])
      };
      return this.usersService.isLogged
      
  }
  
}
