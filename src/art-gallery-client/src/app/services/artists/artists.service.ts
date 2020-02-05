import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Response} from '../../models/response';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {Artist} from '../../models/artist';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Response<Artist[]>> {
    return this.http.get(environment.apiUrl + '/api/v1/artists')
      .pipe(map((data: any) => {
        const response = new Response<Artist[]>();
        Object.assign(response, data);
        return response;
      }));
  }

  getAllActive(): Observable<Response<Artist[]>> {
    return this.http.get(environment.apiUrl + '/api/v1/artists/active')
      .pipe(map((data: any) => {
        const response = new Response<Artist[]>();
        Object.assign(response, data);
        return response;
      }));
  }

  add(artist: Artist): Observable<Response<Artist>> {
    return this.http.post(environment.apiUrl + '/api/v1/artists', artist)
      .pipe(map((data: any) => {
        const response = new Response<Artist>();
        Object.assign(response, data);
        return response;
      }));
  }

  get(id: number): Observable<Response<Artist>> {
    return this.http.get(environment.apiUrl + '/api/v1/artists/' + id)
      .pipe(map((data: any) => {
        const response = new Response<Artist>();
        Object.assign(response, data);
        return response;
      }));
  }

  edit(id: number, artist: Artist): Observable<Response<boolean>> {
    return this.http.put(environment.apiUrl + '/api/v1/artists/edit/' + id, artist)
      .pipe(map((data: any) => {
        const response = new Response<boolean>();
        Object.assign(response, data);
        return response;
      }));
  }

  activation(id: number, activate: boolean): Observable<Response<boolean>> {
    const params = new HttpParams().set('active', String(activate));

    return this.http.put(environment.apiUrl + '/api/v1/artists/deactivate/' + id, {}, {params})
      .pipe(map((data: any) => {
        const response = new Response<boolean>();
        Object.assign(response, data);
        return response;
      }));
  }
}
