import {Injectable} from '@angular/core';
import {Account} from '../../models/account';
import {Observable} from 'rxjs';
import {Response} from '../../models/response';
import {Jwt} from '../../models/jwt';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {
  }

  authenticate(account: Account): Observable<Response<Jwt>> {
    return this.http.post(environment.apiUrl + '/api/v1/authenticate', account)
      .pipe(map((data: any) => {
        const response = new Response<Jwt>();
        Object.assign(response, data);

        if ((response.exceptions != null && response.exceptions.length === 0) || response.result != null) {
          localStorage.setItem('jwtToken', response.result.jwtToken);
        }

        return response;
      }));
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('jwtToken');
    return !this.jwtHelper.isTokenExpired(token);
  }

  signOut() {
    localStorage.removeItem('jwtToken');
  }
}
