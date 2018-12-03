import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 
    console.log('Spotity service ready to use.');
  }

  getQuery(query: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDCL9s1CZ0vHWV95sYD-l_N-tIE_6G8yID2PpE99CndBgxeXLquubAzt1PpczW1EuoxKbXOEZjeFkZTo88'
    });

    return this.http.get(`https://api.spotify.com/v1/${query}`, {headers});
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20').pipe(map( (data: any) => data.albums.items));
  }

  getArtists(artist: string) {
    return this.getQuery(`search?q=${artist}&type=artist&limit=20`).pipe(map( (data: any) => data.artists.items));
  }

  getArtist(artistId: string) {
    return this.getQuery(`artists/${artistId}`);
  }
}
