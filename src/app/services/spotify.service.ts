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
      'Authorization': 'Bearer BQB6R5ZGvK8uHw7d1SmRNTEiweVwxdqFgPoJE7Qe131OTb475dwpVt_IvuP-RATu9XH1lbQ2p4S4KKZb_8I'
    });
    return this.http.get('	https://api.spotify.com/v1/browse/new-releases?limit=10', {headers});
  }
}
