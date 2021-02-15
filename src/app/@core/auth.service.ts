import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
login(username:any,password:any){
 return this.http.post('',{username,password}).pipe(map(user=>{
    localStorage.setItem('AuthorizationData',JSON.stringify(user))

  })

  )}

}
