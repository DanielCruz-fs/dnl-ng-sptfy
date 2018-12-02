import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(imageArray: any[]): string {
    return (imageArray.length == 0) ? 'assets/images/noimage.jpg' : imageArray[0].url;
  }

}
