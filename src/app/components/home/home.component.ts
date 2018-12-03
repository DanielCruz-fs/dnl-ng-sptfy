import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newReleases: any[] = [];
  loaderStatus: boolean = true;
  termToLoad: string = 'new releases';
  errorStatus: boolean = false;
  errorMessage: string;

  constructor(private spotifyService: SpotifyService, private router: Router) { 
    this.spotifyService.getNewReleases().subscribe( (data: any) => {
      console.log(data);
      this.newReleases = data;
      this.loaderStatus = false;
    }, errorData => {
      this.errorStatus = true;
      this.loaderStatus = false;
      console.log(errorData);
      this.errorMessage = errorData.error.error.message;
    });
  }

  ngOnInit() {
  }

  goToArtist(objectItem: any) {
    // console.log(objectItem);
    let artistId: string = objectItem.artists[0].id;
    this.router.navigate(['/artist', artistId]);
    
  }

}
