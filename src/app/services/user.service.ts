import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private myAppUrl:string;
  private myApiUrl:string;

  constructor(private http:HttpClient) {
    this.myAppUrl=environment.endpoint;
    this.myApiUrl='api/user';
  }
  signIn(user:User):Observable<any>{
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}/new`,user);
  }
  login(user:User):Observable<string>{
    return this.http.post<string>(`${this.myAppUrl}${this.myApiUrl}/login`,user);
  }
  getUsers():Observable<User[]>{
    /*const token=localStorage.getItem('token');
    const headers=new HttpHeaders().set('Authorization',`Bearer ${token}`);
    return this.http.get<User[]>(`${this.myAppUrl}${this.myApiUrl}`,{headers:headers});*/
    return this.http.get<User[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }
}
