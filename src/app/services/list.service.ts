import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http:HttpClient) {
    this.myAppUrl=environment.endpoint;
    this.myApiUrl='api';
  }
  getAll(esquema:string,objeto:string):Observable<any[]>{
    const token=localStorage.getItem('token');
    const headers=new HttpHeaders().set('Authorization',`Bearer ${token}`);
    return this.http.get<any[]>(`${this.myAppUrl}${this.myApiUrl}/object/${esquema}/${objeto}/`,{headers:headers});
  }
  getWhere(esquema:string,objeto:string,condicion:string):Observable<any[]>{
    const token=localStorage.getItem('token');
    const headers=new HttpHeaders().set('Authorization',`Bearer ${token}`);
    return this.http.get<any[]>(`${this.myAppUrl}${this.myApiUrl}/object/${esquema}/${objeto}/${condicion}/`,{headers:headers});
  }
  getColumn(esquema:string,objeto:string,column:string,valor:string):Observable<any[]>{
    const token=localStorage.getItem('token');
    const headers=new HttpHeaders().set('Authorization',`Bearer ${token}`);
    return this.http.get<any[]>(`${this.myAppUrl}${this.myApiUrl}/object/${esquema}/${objeto}/${column}/${valor}/`,{headers:headers});
  }
  // getHeaders(esquema:string,objeto:string):Observable<any[]>{
  //   const token=localStorage.getItem('token');
  //   const headers=new HttpHeaders().set('Authorization',`Bearer ${token}`);
  //   return this.http.get<any[]>(`${this.myAppUrl}${this.myApiUrl}/headers/${esquema}/${objeto}/`,{headers:headers});
  // }
  getFunction(esquema:string,funcion:string):Observable<any[]>{
    const token=localStorage.getItem('token');
    const headers=new HttpHeaders().set('Authorization',`Bearer ${token}`);
    return this.http.get<any[]>(`${this.myAppUrl}${this.myApiUrl}/function/${esquema}/${funcion}/`,{headers:headers});
  }
  putApiestado(esquema:string,objeto:string,apiestado:string,usumod:string,condicion:string):Observable<string>{
    const token=localStorage.getItem('token');
    const headers=new HttpHeaders().set('Authorization',`Bearer ${token}`);
    return this.http.get<string>(`${this.myAppUrl}${this.myApiUrl}/apiestado/${esquema}/${objeto}/${apiestado}/${usumod}/${condicion}`,{headers:headers});
  }
}
