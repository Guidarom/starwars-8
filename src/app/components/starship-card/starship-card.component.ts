import { Component,Input,OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { StarwarsService } from '../services/starwars.service';

//import { switchMap, tap,  } from 'rxjs';
//import { Result } from '../interfaces/starships';
//import { IdPipe } from '../../pipes/id.pipe';


@Component({
  selector: 'app-starship-card',
  templateUrl: './starship-card.component.html',
  styleUrls: ['./starship-card.component.css']
})
export class StarshipCardComponent implements OnInit{


  constructor(
    private activatedRoute: ActivatedRoute,
    private starwarsService:StarwarsService

    ) { }

  

  public currentShip: any
  id: number= 0
  public urlImg: string = 'https://starwars-visualguide.com/assets/img/starships';
 // @Input() ship!:Result; cambiar el tipo any a un interfaz...va muy lento la promesa y no reconoce .name

  ngOnInit(): void {

  /*   this.activatedRoute.params
     .pipe( //pipe sirve para declarar cualquier cantidad de operadores que trabajaran con el producto de este Observable
      switchMap(({id} ) =>
      this.starwarsService.getShipCard(id)),
    //this.WarsServiseService.datailsStarShips(url)),
      tap(console.log)
      ) */

      this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
        const param=params.get('id');
        this.id= Number(param)
        this.getShipCard(this.id)
        
      })


      /* this.activatedRoute.params
        .subscribe(params=>{
          console.log(params);
         // this.getShipCard(params)
        }) */

    /* const idShip = this.route.snapshot.paramMap.get('id') ...este codigo funciona pero provaremos activatedRoute.params
    console.log(idShip)
    this.getShipCard(idShip)  */
    
  //this.starwarsService.getShipCard(id) 
}

getShipCard(id:number){
  
    this.currentShip= this.starwarsService.getShipCard(id)
      .subscribe(resp=>{
        //console.log(resp)
        //console.log(resp.img)
        this.currentShip= resp
        //this.ship =resp al 
      })
    
  //return this.starwarsService.getShipCard(num) 
}


}
