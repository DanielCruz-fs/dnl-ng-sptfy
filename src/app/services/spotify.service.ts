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
      'Authorization': 'Bearer BQB46W4SkPLq1Bx1HlOrc7H8wBnlulGy3hEMDWE2prnd5AD9I90bgknqZjnf8Vikad5Xjt0X8QIrf5uFYXc'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers});
  }

  getArtist(artist: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQB46W4SkPLq1Bx1HlOrc7H8wBnlulGy3hEMDWE2prnd5AD9I90bgknqZjnf8Vikad5Xjt0X8QIrf5uFYXc'
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${artist}&type=artist&limit=20`, {headers});

  }
}
