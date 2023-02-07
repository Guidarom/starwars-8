import { Pipe, PipeTransform } from '@angular/core';
import { Result } from '../components/interfaces/starships';

@Pipe({
  name: 'id'
})
export class IdPipe implements PipeTransform {


    // usando este regex extraemos solo el numero de la url que contiene la nave en particular con id.
    transform( result: Result): string  {
      return result.url.replace(/\D/g, '');
  }

}
