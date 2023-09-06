import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { seg_usuario } from '../interfaces/seg_usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http:HttpClient) {
    this.myAppUrl=environment.endpoint;
    this.myApiUrl='api/login/';
  }
  login(user:seg_usuario):Observable<string>{
    return this.http.post<string>(`${this.myAppUrl}${this.myApiUrl}`, user);
  }
}
