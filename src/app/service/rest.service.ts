import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpHeaderResponse } from '@angular/common/http';
import { timeout } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { IPrendarioCars } from '../models/iprendario-cars';


@Injectable({
  providedIn: 'root'
})
export class RestService {
  public subscription: any;
  // headers = new HttpHeaders().set('Content--type','application/json; charset=utf-8');
  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type':  'application/xml',
  //     'Authorization': 'jwt-token'
  //   })
  // };

  constructor(private http: HttpClient) { }

  // public GET<T>(url:string):Promise<T>{
  //   return new Promise((resolve,rejects)=>{
  //     this.http.get(url).subscribe((data:any)=>{
  //       console.log(data);
  //       resolve(data);
  //     },error=>{
  //       console.log(error);
  //     })
  //   });
  // }

  GET(url:string):Observable<IPrendarioCars>{
    return this.http.get<IPrendarioCars>(url);
  }
}
