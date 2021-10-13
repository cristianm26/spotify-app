import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TrackModel } from 'src/app/core/models/tracks.model';
import { TrackService } from '../../services/track.service';
@Component({
  selector: 'app-track-page',
  templateUrl: './track-page.component.html',
  styleUrls: ['./track-page.component.css'],
})
export class TrackPageComponent implements OnInit {
  tracksTrending: Array<TrackModel> = [];
  tracksRandom: Array<TrackModel> = [];
  listObservers$: Array<Subscription> = [];
  constructor(private trackService: TrackService) { }

  ngOnInit(): void {
    this.getTracks();
    this.getRandoms();
  }

  getTracks(): void {
    this.trackService.getAllTracks$()
      .subscribe((response: TrackModel[]) => {
        this.tracksTrending = response;
      })
  }


  getRandoms(): void {
    this.trackService.getAllRandoms$()
      .subscribe((response: TrackModel[]) => {
        this.tracksRandom = response;
      }, err => {
        console.log('Error de Conexión')
      })
  }
}
