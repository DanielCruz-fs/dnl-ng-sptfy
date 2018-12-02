import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genre'
})
export class GenrePipe implements PipeTransform {

  transform(genreArray: any[]): string {
    return (genreArray.length === 0 ? 'Unknown' : genreArray[0]); 
  }

}
