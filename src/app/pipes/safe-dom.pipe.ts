import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeDom'
})
export class SafeDomPipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer) {}

  transform(id: string): any {
    const URL: string = 'https://open.spotify.com/embed/track/';
    return this.domSanitizer.bypassSecurityTrustResourceUrl( URL + id );
  }

}
