import { Component, OnInit } from '@angular/core';
import { Result, Starships } from '../interfaces/starships';
import { StarwarsService } from '../services/starwars.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit{

  starShipsList:Result[]= []  //cambiar nave por otro nombre, queremos probar si funciona el pipes
  page:number = 1

  constructor(private starwarsService:StarwarsService){}
 


  // con este onInit traemos la funcion de getShips y la ejecutamos directamente cuando se abra este componente
  ngOnInit(): void {
      this.getShips() 
  }


  getShips(){
    if (this.page === 4) {
      return;
    }
    this.starwarsService.getShips(this.page)
      .subscribe(resp => {
        this.starShipsList =resp.results
      })
  }

  onScroll(): void {
    if (this.page === 4) {
      return;
    }
    this.starwarsService.getShips(++this.page)
      .subscribe((response: Starships) => {
        this.starShipsList.push(...response.results);
      })
  }


}

