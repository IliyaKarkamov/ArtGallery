import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Response} from '../../models/response';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {Room} from '../../models/room';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Response<Room[]>> {
    return this.http.get(environment.apiUrl + '/api/v1/rooms')
      .pipe(map((data: any) => {
        const response = new Response<Room[]>();
        Object.assign(response, data);
        return response;
      }));
  }

  getAllActive(): Observable<Response<Room[]>> {
    return this.http.get(environment.apiUrl + '/api/v1/rooms/active')
      .pipe(map((data: any) => {
        const response = new Response<Room[]>();
        Object.assign(response, data);
        return response;
      }));
  }

  add(room: Room): Observable<Response<Room>> {
    return this.http.post(environment.apiUrl + '/api/v1/rooms', room)
      .pipe(map((data: any) => {
        const response = new Response<Room>();
        Object.assign(response, data);
        return response;
      }));
  }

  get(id: number): Observable<Response<Room>> {
    return this.http.get(environment.apiUrl + '/api/v1/rooms/' + id)
      .pipe(map((data: any) => {
        const response = new Response<Room>();
        Object.assign(response, data);
        return response;
      }));
  }

  edit(id: number, room: Room): Observable<Response<boolean>> {
    return this.http.put(environment.apiUrl + '/api/v1/rooms/edit/' + id, room)
      .pipe(map((data: any) => {
        const response = new Response<boolean>();
        Object.assign(response, data);
        return response;
      }));
  }

  activation(id: number, activate: boolean): Observable<Response<boolean>> {
    const params = new HttpParams().set('active', String(activate));

    return this.http.put(environment.apiUrl + '/api/v1/rooms/deactivate/' + id, {}, {params})
      .pipe(map((data: any) => {
        const response = new Response<boolean>();
        Object.assign(response, data);
        return response;
      }));
  }

  getAllForGallery(galleryId: number): Observable<Response<Room[]>> {
    return this.http.get(environment.apiUrl + '/api/v1/rooms/gallery/' + galleryId)
      .pipe(map((data: any) => {
        const response = new Response<Room[]>();
        Object.assign(response, data);
        return response;
      }));
  }
}
