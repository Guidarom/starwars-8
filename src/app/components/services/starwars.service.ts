import { Injectable, } from '@angular/core';
import { Observable} from 'rxjs';

import { HttpClient,} from '@angular/common/http';
import { Result,Starships } from '../interfaces/starships';


@Injectable({providedIn: 'root'})
export class StarwarsService {

  constructor ( private http:HttpClient) { }

  public starShipsList:Result []=[];
  
  
  getShips(page:number):Observable<Starships>{
    
    //this.http.get('https://swapi.dev/api/starships/1')    https://swapi.dev/api/starships/?page=1 esta api es mas lenta
    //return this.http.get<Starships>(`https://starpi.herokuapp.com/starpi/starships/${page}`)
    return this.http.get<Starships>(`https://swapi.dev/api/starships/?page=${page}`)

  }

  getShipCard(id:number): Observable<Result>{
     // https://swapi.dev/api/starships/17/
    //this.http.get('https://starpi.herokuapp.com/starpi/starships/1')
    return this.http.get<Result>(`https://swapi.dev/api/starships/${id}/`)

}
}



  


