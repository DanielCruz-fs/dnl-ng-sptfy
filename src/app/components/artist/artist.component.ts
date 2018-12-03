import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent {
  artist: any = {};
  constructor(private activatedRoute: ActivatedRoute, private spotifyService: SpotifyService) {
    this.activatedRoute.params.subscribe( params => {
      this.getArtist(params.id);
    });
  }

  getArtist(id: string) {
    this.spotifyService.getArtist(id).subscribe( data => {
      console.log(data);
      this.artist = data;
    });
  }


}
