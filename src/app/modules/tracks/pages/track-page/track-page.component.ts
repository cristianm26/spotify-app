import { Component, OnInit } from '@angular/core';
import { TrackModel } from 'src/app/core/models/tracks.model';
import * as dataRaw from '../../../../data/tracks.json';
@Component({
  selector: 'app-track-page',
  templateUrl: './track-page.component.html',
  styleUrls: ['./track-page.component.css']
})
export class TrackPageComponent implements OnInit {
  mocTracksList: Array<TrackModel> = [

  ]
  constructor() { }

  ngOnInit(): void {
    const { data }: any = (dataRaw as any).default;
    this.mocTracksList = data;
  }

}
