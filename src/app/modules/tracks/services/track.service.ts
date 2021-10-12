import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { TrackModel } from '../../../core/models/tracks.model';

@Injectable({
  providedIn: 'root',
})
export class TrackService {
  private readonly URL = environment.api;

  constructor(private http: HttpClient) { }

  private skipById(listTracks: TrackModel[], id: number): Promise<TrackModel[]> {
    return new Promise((resolve, reject) => {
      const listTmp = listTracks.filter(a => a._id !== id)
      resolve(listTmp)
    })
  }

  // Metodo parea devolver todas las canciones
  /**
   * //TODO {data:[..1,...2,..2]}
   *
   * @returns
   */
  getAllTracks$(): Observable<any> {
    return this.http.get(`${this.URL}/tracks`).pipe(
      map(({ data }: any) => {
        return data;
      })
    );
  }

  /**
   *
   * @returns Devolver canciones random
   */
  getAllRandoms$(): Observable<any> {
    return this.http.get(`${this.URL}/tracks`).pipe(
      /*   map(({ data }: any) => {
          // obtenemos canciones revertidas
          return data.reverse;
        }), */

      mergeMap(({ data }: any) => this.skipById(data, 1)),
      // obtenemos canciones revertidas


      /*   map((dataRevertida) => {
          return dataRevertida.filter((track: TrackModel) => track._id !== 1);
        }) */
      catchError((err) => {
        const { status, statusText } = err;
        return of([])
      })

    );
  }
}
