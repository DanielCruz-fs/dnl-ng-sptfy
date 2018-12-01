import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  artists: any[] = [];
  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
  }

  search(artist: string) {
    this.spotifyService.getArtist(artist).subscribe( (data: any) => {
      console.log(data.artists.items);
      this.artists = data.artists.items;
    });
  }

}
