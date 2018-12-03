import { SpotifyService } from './../../services/spotify.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent {
  artist: any = {};
  loaderStatus: boolean = true;
  topTracks: any[] = [];
  termToLoad: string = 'your fav artist';

  constructor(private activatedRoute: ActivatedRoute, private spotifyService: SpotifyService) {
    this.activatedRoute.params.subscribe( params => {
      this.getArtist(params.id);
      this.getTopTracks(params.id);
    });
  }

  getArtist(id: string) {
    this.spotifyService.getArtist(id).subscribe( data => {
      console.log(data);
      this.artist = data;
      this.loaderStatus = false;
    });
  }

  getTopTracks(id: string) {
    this.spotifyService.getTopTracks(id).subscribe(data => {
      console.log(data);
      this.topTracks = data;
    });
  }


}
