import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {Response} from '../../models/response';
import {Style} from '../../models/style';

@Injectable({
  providedIn: 'root'
})
export class StylesService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Response<Style[]>> {
    return this.http.get(environment.apiUrl + '/api/v1/styles')
      .pipe(map((data: any) => {
        const response = new Response<Style[]>();
        Object.assign(response, data);
        return response;
      }));
  }

  add(style: Style): Observable<Response<Style>> {
    return this.http.post(environment.apiUrl + '/api/v1/styles', style)
      .pipe(map((data: any) => {
        const response = new Response<Style>();
        Object.assign(response, data);
        return response;
      }));
  }

  get(id: number): Observable<Response<Style>> {
    return this.http.get(environment.apiUrl + '/api/v1/styles/id/' + id)
      .pipe(map((data: any) => {
        const response = new Response<Style>();
        Object.assign(response, data);
        return response;
      }));
  }

  edit(id: number, style: Style): Observable<Response<boolean>> {
    return this.http.put(environment.apiUrl + '/api/v1/styles/id/' + id, style)
      .pipe(map((data: any) => {
        const response = new Response<boolean>();
        Object.assign(response, data);
        return response;
      }));
  }

  deactivate(id: number): Observable<Response<boolean>> {
    return this.http.delete(environment.apiUrl + '/api/v1/styles/id/' + id)
      .pipe(map((data: any) => {
        const response = new Response<boolean>();
        Object.assign(response, data);
        return response;
      }));
  }
}
