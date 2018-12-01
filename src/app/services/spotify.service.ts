import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 
    console.log('Spotity service ready to use.');
  }

  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAXOye26IUtjHF4OVufdxJr1LEb-Zoymx3U-ZdI7T0YhoTLWBCT4CcXkYAiS9IvTahBgnmZlXMl_w0c3oQ'
    });
    this.http.get('	https://api.spotify.com/v1/browse/new-releases?limit=20', {headers}).subscribe( data => {
      console.log(data);
    });
  }
}
