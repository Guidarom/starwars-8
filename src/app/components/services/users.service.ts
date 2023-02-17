import { Injectable } from '@angular/core';
import { User } from '../interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
  isLogged:boolean = false

  usersList:User[]=[]
  redirectUrl:any =''

  loginOut(){
    this.isLogged=false
    this.redirectUrl=''
    localStorage.removeItem('value')
    console.log('deu siau')

  }

  logginTrue(){
    this.isLogged=true
  }
  newUrl(value:any){
    value = this.redirectUrl
    localStorage.setItem('value',JSON.stringify(value)),
    console.log(localStorage)

    }
    
  

  saveToLocalStorage(list: User[]) {
    localStorage.setItem('list', JSON.stringify(list))
    console.log(localStorage)
  }

  getListFromLocalStorage(key: string) {
    if (!localStorage.getItem(key)) {
      return;
    }
    this.usersList=JSON.parse(localStorage.getItem(key)!)
  }

}
