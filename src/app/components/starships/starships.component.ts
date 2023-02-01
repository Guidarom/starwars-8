import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../services/starwars.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit{

  

  get starShipsList(){
    return this.starwarsService.starShipsList;
  }
  constructor(private starwarsService:StarwarsService){}
 


  // con este onInit traemos la funcion de getShips y la ejecutamos directamente cuando se abra este componente
  ngOnInit(): void {
      this.starwarsService.getShips() 
  }



}
