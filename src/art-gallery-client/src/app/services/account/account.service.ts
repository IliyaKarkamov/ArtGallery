import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';

import {Account} from '../../models/account';
import {Observable} from 'rxjs';
import {Response} from '../../models/response';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor(private http: HttpClient) {
  }

  create(account: Account): Observable<any> {
    return this.http.post(environment.apiUrl + '/api/v1/users', account);
  }

  getAll(): Observable<Response<Account[]>> {
    return this.http.get(environment.apiUrl + '/api/v1/users')
      .pipe(map((data: any) => {
        const response = new Response<Account[]>();
        Object.assign(response, data);
        return response;
      }));
  }

  get(id: number): Observable<Response<Account>> {
    return this.http.get(environment.apiUrl + '/api/v1/users/id/' + id)
      .pipe(map((data: any) => {
        const response = new Response<Account>();
        Object.assign(response, data);
        return response;
      }));
  }

  checkUsername(username: string): Observable<Response<boolean>> {
    return this.http.get(environment.apiUrl + '/api/v1/users/exists/?username=' + username)
      .pipe(map((data: any) => {
        const response = new Response<boolean>();
        Object.assign(response, data);
        return response;
      }));
  }

  checkEmail(email: string): Observable<Response<boolean>> {
    return this.http.get(environment.apiUrl + '/api/v1/users/exists/?email=' + email)
      .pipe(map((data: any) => {
        const response = new Response<boolean>();
        Object.assign(response, data);
        return response;
      }));
  }

  edit(id: number, account: Account): Observable<Response<boolean>> {
    return this.http.put(environment.apiUrl + '/api/v1/users/id/' + id, account)
      .pipe(map((data: any) => {
        const response = new Response<boolean>();
        Object.assign(response, data);
        return response;
      }));
  }

  deactivate(id: number): Observable<Response<boolean>> {
    return this.http.delete(environment.apiUrl + '/api/v1/users/id/' + id)
      .pipe(map((data: any) => {
        const response = new Response<boolean>();
        Object.assign(response, data);
        return response;
      }));
  }
}
