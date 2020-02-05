import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Response} from '../../models/response';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {Era} from '../../models/era';

@Injectable({
  providedIn: 'root'
})
export class ErasService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Response<Era[]>> {
    return this.http.get(environment.apiUrl + '/api/v1/eras')
      .pipe(map((data: any) => {
        const response = new Response<Era[]>();
        Object.assign(response, data);
        return response;
      }));
  }

  getAllActive(): Observable<Response<Era[]>> {
    return this.http.get(environment.apiUrl + '/api/v1/eras/active')
      .pipe(map((data: any) => {
        const response = new Response<Era[]>();
        Object.assign(response, data);
        return response;
      }));
  }

  add(style: Era): Observable<Response<Era>> {
    return this.http.post(environment.apiUrl + '/api/v1/eras', style)
      .pipe(map((data: any) => {
        const response = new Response<Era>();
        Object.assign(response, data);
        return response;
      }));
  }

  get(id: number): Observable<Response<Era>> {
    return this.http.get(environment.apiUrl + '/api/v1/eras/' + id)
      .pipe(map((data: any) => {
        const response = new Response<Era>();
        Object.assign(response, data);
        return response;
      }));
  }

  edit(id: number, style: Era): Observable<Response<boolean>> {
    return this.http.put(environment.apiUrl + '/api/v1/eras/edit/' + id, style)
      .pipe(map((data: any) => {
        const response = new Response<boolean>();
        Object.assign(response, data);
        return response;
      }));
  }

  activation(id: number, activate: boolean): Observable<Response<boolean>> {
    const params = new HttpParams().set('active', String(activate));

    return this.http.put(environment.apiUrl + '/api/v1/eras/deactivate/' + id, {}, {params})
      .pipe(map((data: any) => {
        const response = new Response<boolean>();
        Object.assign(response, data);
        return response;
      }));
  }
}
