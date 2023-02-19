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
    this.removeUrl()
    console.log('deu siau')
  }


  removeUrl(){
    if(this.redirectUrl!==''){
      localStorage.removeItem('value')
      this.redirectUrl=''
      console.log(this.redirectUrl)
    }
  }

  logginTrue(){
    this.isLogged=true
  }
  newUrl(value:any){
    value = this.redirectUrl
    localStorage.setItem('value',JSON.stringify(value)),
    console.log('guardado new url')
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
