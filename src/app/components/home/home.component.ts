import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newReleases: any[] = [];
  loaderStatus: boolean = true;

  constructor(private spotifyService: SpotifyService) { 
    this.spotifyService.getNewReleases().subscribe( (data: any) => {
      this.newReleases = data;
      this.loaderStatus = false;
    });
  }

  ngOnInit() {
  }

}
