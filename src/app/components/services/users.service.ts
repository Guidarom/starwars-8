import { Injectable } from '@angular/core';
import { User } from '../interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  usersList:User[]=[]


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
