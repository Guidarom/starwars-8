import { Component } from '@angular/core';
import { UsersService } from '../../components/services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private userService:UsersService){}

  get isLogged(){
    return this.userService.isLogged
  }

  loginOut(){
    return this.userService.loginOut()
  }
  

}
