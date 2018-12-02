import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  artists: any[] = [];
  loaderStatus: boolean;

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
  }

  search(artist: string) {
    if (artist) {
      this.loaderStatus = true;
      this.spotifyService.getArtist(artist).subscribe( (data: any) => {
        console.log(data);
        this.artists = data;
        this.loaderStatus = false;
      }); 
    } else {
      this.loaderStatus = false;
    }
  }

}
