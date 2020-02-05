import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Response} from '../../models/response';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {Gallery} from '../../models/gallery';

@Injectable({
  providedIn: 'root'
})
export class GalleriesService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Response<Gallery[]>> {
    return this.http.get(environment.apiUrl + '/api/v1/galleries')
      .pipe(map((data: any) => {
        const response = new Response<Gallery[]>();
        Object.assign(response, data);
        return response;
      }));
  }

  add(gallery: Gallery): Observable<Response<Gallery>> {
    return this.http.post(environment.apiUrl + '/api/v1/galleries', gallery)
      .pipe(map((data: any) => {
        const response = new Response<Gallery>();
        Object.assign(response, data);
        return response;
      }));
  }

  get(id: number): Observable<Response<Gallery>> {
    return this.http.get(environment.apiUrl + '/api/v1/galleries/' + id)
      .pipe(map((data: any) => {
        const response = new Response<Gallery>();
        Object.assign(response, data);
        return response;
      }));
  }

  edit(id: number, gallery: Gallery): Observable<Response<boolean>> {
    return this.http.put(environment.apiUrl + '/api/v1/galleries/edit/' + id, gallery)
      .pipe(map((data: any) => {
        const response = new Response<boolean>();
        Object.assign(response, data);
        return response;
      }));
  }

  activation(id: number, activate: boolean): Observable<Response<boolean>> {
    const params = new HttpParams().set('active', String(activate));

    return this.http.put(environment.apiUrl + '/api/v1/galleries/deactivate/' + id, {}, {params})
      .pipe(map((data: any) => {
        const response = new Response<boolean>();
        Object.assign(response, data);
        return response;
      }));
  }
}
