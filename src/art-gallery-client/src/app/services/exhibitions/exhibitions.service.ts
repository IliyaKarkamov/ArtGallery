import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Response} from '../../models/response';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {Exhibition} from '../../models/exhibition';

@Injectable({
  providedIn: 'root'
})
export class ExhibitionsService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Response<Exhibition[]>> {
    return this.http.get(environment.apiUrl + '/api/v1/exhibitions')
      .pipe(map((data: any) => {
        const response = new Response<Exhibition[]>();
        Object.assign(response, data);
        return response;
      }));
  }

  getAllActive(): Observable<Response<Exhibition[]>> {
    return this.http.get(environment.apiUrl + '/api/v1/exhibitions/active')
      .pipe(map((data: any) => {
        const response = new Response<Exhibition[]>();
        Object.assign(response, data);
        return response;
      }));
  }

  add(exhibition: Exhibition): Observable<Response<Exhibition>> {
    return this.http.post(environment.apiUrl + '/api/v1/exhibitions', exhibition)
      .pipe(map((data: any) => {
        const response = new Response<Exhibition>();
        Object.assign(response, data);
        return response;
      }));
  }

  get(id: number): Observable<Response<Exhibition>> {
    return this.http.get(environment.apiUrl + '/api/v1/exhibitions/' + id)
      .pipe(map((data: any) => {
        const response = new Response<Exhibition>();
        Object.assign(response, data);
        return response;
      }));
  }

  edit(id: number, exhibition: Exhibition): Observable<Response<boolean>> {
    return this.http.put(environment.apiUrl + '/api/v1/exhibitions/edit/' + id, exhibition)
      .pipe(map((data: any) => {
        const response = new Response<boolean>();
        Object.assign(response, data);
        return response;
      }));
  }

  getAllForRoom(id: number): Observable<Response<Exhibition[]>> {
    return this.http.get(environment.apiUrl + '/api/v1/exhibitions/room/' + id)
      .pipe(map((data: any) => {
        const response = new Response<Exhibition[]>();
        Object.assign(response, data);
        return response;
      }));
  }
}
