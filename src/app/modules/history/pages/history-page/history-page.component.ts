import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { TrackModel } from '../../../../core/models/tracks.model';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit {
  /*  listResults: TrackModel[] = []; */
  listResults: Observable<any> = of([]);
  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  receiveData(event: string): void {
    /*   this.searchService.searchTrack$(event).subscribe((res) => { */
    /*  this.listResults = res.data; */

    /*  }) */
    this.listResults = this.searchService.searchTrack$(event)
  }
}
