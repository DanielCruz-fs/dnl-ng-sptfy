import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  artists: any[] = [];
  loaderStatus: boolean;
  termToLoad: string = 'artists';

  constructor(private spotifyService: SpotifyService, private router: Router) { }

  ngOnInit() {
  }

  search(artist: string) {
    if (artist) {
      this.loaderStatus = true;
      this.spotifyService.getArtists(artist).subscribe( (data: any) => {
        console.log(data);
        this.artists = data;
        this.loaderStatus = false;
      }); 
    } else {
      this.loaderStatus = false;
    }
  }

  goToArtist(objectItem: any) {
    // console.log(objectItem);
    let artistId: string = objectItem.id;
    this.router.navigate(['/artist', artistId]);
  }

}
