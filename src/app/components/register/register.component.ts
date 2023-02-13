import { Component } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../interfaces/users';
import { UsersService } from '../services/users.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

signupForm:FormGroup

  constructor(
    private router: Router,
    private builder:FormBuilder,
    private userService:UsersService
  ){
    this.signupForm=this.builder.group({
      name:[''],
      email:['',Validators.compose([Validators.email,Validators.required])],
      password:['',Validators.compose([Validators.minLength(6),Validators.required],)]
    })

  }

  get usersList(){
    return this.userService.usersList

  }

    required( field : string){
    return this.signupForm.controls[field].errors && this.signupForm.controls[field].touched
    }

    send(){
      const newUser: User={
        id: this.usersList.length +1,
        name: this.signupForm.value.name,
        email:this.signupForm.value.email,
        password:this.signupForm.value.password

      }


      if(this.signupForm.valid){
        this.usersList.push(newUser)
        
      console.log(this.usersList)
      this.userService.saveToLocalStorage(this.usersList)
      this.router.navigate(['./starships'])
      }
      
      
    }
  



  //esta parte funciona con ngmodel
/* 
  user ={
    name:'',
    email:'',
    password:''
  }

  signUp(){
    console.log(this.user)

} */


}
