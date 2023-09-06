import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { seg_usuario } from '../interfaces/seg_usuario';

@Injectable({
  providedIn: 'root'
})
export class SegUsuarioService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http:HttpClient) {
    this.myAppUrl=environment.endpoint;
    this.myApiUrl='api/object';
  }
  getAllSegUsuario(esquema:string,objeto:string):Observable<seg_usuario[]>{
    const token=localStorage.getItem('token');
    const headers=new HttpHeaders().set('Authorization',`Bearer ${token}`);
    return this.http.get<seg_usuario[]>(`${this.myAppUrl}${this.myApiUrl}/${esquema}/${objeto}/`,{headers:headers});
  }
}