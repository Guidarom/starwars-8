import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { User } from '../interfaces/users';
import { StarwarsService } from '../services/starwars.service';
import { STRING_TYPE } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signInForm:FormGroup;
 // private redirectUrl:any ='';

  get redirectUrl(){
    return this.userService.redirectUrl
  }

  set redirectUrl(value:any){
    this.userService.redirectUrl =value
  }

  constructor(
    private router: Router,
    private builder:FormBuilder,
    private userService:UsersService,
    private  activatedRoute :ActivatedRoute
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
    this.redirectUrl = this.activatedRoute.snapshot.queryParamMap.get('redirectUrl')||'';
    this.userService.getListFromLocalStorage('list');

   /*  if (this.redirectUrl!=='') {
      this.newUrl(this.redirectUrl)
      console.log( 'run login')
    } */
    
  }
  
 /*  removeUrl():void{
    this.userService.removeUrl()
    //console.log('remove works')
    } */


  /* newUrl(){
      this.userService.newUrl()
  } */

  get usersList(){
    return this.userService.usersList

  }
  get isLogged(){
    return this.userService.isLogged
  }
  login(){
    const currentUser: User={
      email:this.signInForm.value.email,
      password:this.signInForm.value.password
    }
    

    if(this.signInForm.valid){
      const foundUser= this.usersList.find((e:any)=>currentUser.email ===e.email)
      foundUser?.password === currentUser.password? (alert(`Welcome ${foundUser?.name}`),
      (this.router.navigateByUrl(this.redirectUrl)),
      (this.userService.logginTrue()))      
      : alert('try it again!')
    }
    this.signInForm.markAllAsTouched()  
  }



}
