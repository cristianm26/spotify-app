import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private readonly URL = environment.api;

  constructor(private http: HttpClient) { }

  searchTrack$(term: string): Observable<any> {
    return this.http.get(`${this.URL}/tracks?src=${term}`).pipe(
      map((dataRaw: any) => dataRaw.data))
  }
}
