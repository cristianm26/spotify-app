import { Component, OnInit } from '@angular/core';
import { TrackModel } from '../../../core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {

  mockCover: TrackModel = {
    cover: 'https://http2.mlstatic.com/D_NQ_NP_715527-MEC45248182617_032021-O.jpg',
    album: 'Deluxe Edition',
    name: 'Dua Lipa',
    url: '',
    _id: 1
  }
  constructor() { }

  ngOnInit(): void {
  }

}
