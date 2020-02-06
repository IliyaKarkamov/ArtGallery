import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Response} from '../../models/response';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {Artefact} from '../../models/artefact';

@Injectable({
  providedIn: 'root'
})
export class ArtefactsService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Response<Artefact[]>> {
    return this.http.get(environment.apiUrl + '/api/v1/artefacts')
      .pipe(map((data: any) => {
        const response = new Response<Artefact[]>();
        Object.assign(response, data);
        return response;
      }));
  }

  getAllForExhibition(id: number): Observable<Response<Artefact[]>> {
    return this.http.get(environment.apiUrl + '/api/v1/artefacts/exh/' + id)
      .pipe(map((data: any) => {
        const response = new Response<Artefact[]>();
        Object.assign(response, data);
        return response;
      }));
  }

  getNewest(count: number): Observable<Response<Artefact[]>> {
    return this.http.get(environment.apiUrl + '/api/v1/artefacts/newest/' + count)
      .pipe(map((data: any) => {
        const response = new Response<Artefact[]>();
        Object.assign(response, data);
        return response;
      }));
  }

  add(artefact: Artefact): Observable<Response<Artefact>> {
    return this.http.post(environment.apiUrl + '/api/v1/artefacts', artefact)
      .pipe(map((data: any) => {
        const response = new Response<Artefact>();
        Object.assign(response, data);
        return response;
      }));
  }

  get(id: number): Observable<Response<Artefact>> {
    return this.http.get(environment.apiUrl + '/api/v1/artefacts/' + id)
      .pipe(map((data: any) => {
        const response = new Response<Artefact>();
        Object.assign(response, data);
        return response;
      }));
  }

  edit(id: number, artefact: Artefact): Observable<Response<boolean>> {
    return this.http.put(environment.apiUrl + '/api/v1/artefacts/edit/' + id, artefact)
      .pipe(map((data: any) => {
        const response = new Response<boolean>();
        Object.assign(response, data);
        return response;
      }));
  }

  activation(id: number, activate: boolean): Observable<Response<boolean>> {
    const params = new HttpParams().set('active', String(activate));

    return this.http.put(environment.apiUrl + '/api/v1/artefacts/deactivate/' + id, {}, {params})
      .pipe(map((data: any) => {
        const response = new Response<boolean>();
        Object.assign(response, data);
        return response;
      }));
  }
}
