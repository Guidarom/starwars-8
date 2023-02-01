import { Injectable, } from '@angular/core';
//import { Observable} from 'rxjs';

import { HttpClient,} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  constructor ( private http:HttpClient) { }

  //CAmbiar any por su verdadero valor
  public starShipsList:any []=[];


  getShips(){
    this.http.get('https://swapi.dev/api/starships')
        .subscribe((resp:any)=>{
          console.log(resp.results)
          this.starShipsList= resp.results
        });
  }
    
    
    
    }
    


  


