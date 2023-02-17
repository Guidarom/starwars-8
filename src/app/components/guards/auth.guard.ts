import { Injectable, Pipe } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../services/users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private usersService:UsersService,
               private router:Router,
               private route: ActivatedRoute){}

  canActivate(
    route: ActivatedRouteSnapshot,
    //state: RouterStateSnapshot){
    state: RouterStateSnapshot): Observable<boolean > | Promise<boolean> | boolean {
    
    
      if (!this.usersService.isLogged){
        this.router.navigate(['login'], { queryParams: { redirectUrl: state.url }});
        return false
      };
      
      return true
      
  }
  
}
