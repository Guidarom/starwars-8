import { Injectable, } from '@angular/core';
import { Observable} from 'rxjs';

import { HttpClient,} from '@angular/common/http';
import { Result,Starships } from '../interfaces/starships';


@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  constructor ( private http:HttpClient) { }

  //CAmbiar any por su verdadero valor
  public starShipsList:Result []=[];
  
  
  getShips(page:number):Observable<Starships>{
    //https://swapi.dev/api/starships/1
    
    //this.http.get('https://swapi.dev/api/starships')    esta api es mas lenta
    return this.http.get<Starships>(`https://starpi.herokuapp.com/starpi/starships/${page}`)


  }

  getShipCard(id:number): Observable<Result>{
     // https://swapi.dev/api/starships/17/
    //this.http.get('https://starpi.herokuapp.com/starpi/starships/1')
    return this.http.get<Result>(`https://swapi.dev/api/starships/${id}/`)

}
  
    
    
    }



  


