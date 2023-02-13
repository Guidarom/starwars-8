import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { User } from '../interfaces/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signInForm:FormGroup

  constructor(
    private router: Router,
    private builder:FormBuilder,
    private userService:UsersService
  ){
    this.signInForm=this.builder.group({
      email:['',Validators.compose([Validators.email,Validators.required])],
      password:['',Validators.compose([Validators.minLength(6),Validators.required],)]
    })


  }
  required( field : string){
    return this.signInForm.controls[field].errors && this.signInForm.controls[field].touched
    }




  ngOnInit(): void {
    this.userService.getListFromLocalStorage('list');
    console.log(this.usersList)
    
  }

  get usersList(){
    return this.userService.usersList

  }
  login(){
    const currentUser: User={
      email:this.signInForm.value.email,
      password:this.signInForm.value.password
    }
    

    if(this.signInForm.valid){
      const foundUser= this.usersList.find((e:any)=>currentUser.email ===e.email)
      foundUser?.password === currentUser.password? (alert(`Welcome ${foundUser?.name}`),(this.router.navigate(['./starships'])))
      : alert('try it again!')

    
    }

  }



}
