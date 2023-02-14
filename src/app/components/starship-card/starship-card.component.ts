import { Component,Input,OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { StarwarsService } from '../services/starwars.service';



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

      this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
        const param=params.get('id');
        this.id= Number(param)
        this.getShipCard(this.id)
        
      })

}

getShipCard(id:number){
  
    this.currentShip= this.starwarsService.getShipCard(id)
      .subscribe(resp=>{
        this.currentShip= resp
      })

}


}
