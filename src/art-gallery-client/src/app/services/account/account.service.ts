import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {environment} from '../../../environments/environment';

import {Account} from '../../models/account';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor(private http: HttpClient) {
  }

  create(account: Account): Observable<any> {
    return this.http.put(environment.apiUrl + '/api/v1/users', account);
  }
}
