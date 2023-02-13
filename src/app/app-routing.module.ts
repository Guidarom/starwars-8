import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { StarshipsComponent } from './components/starships/starships.component';
import { StarshipCardComponent } from './components/starship-card/starship-card.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'starships',component:StarshipsComponent},
  {path:'starships/:id',component:StarshipCardComponent},// :id es para asignarle una ruta a cada nave con su id creado en pipe
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
