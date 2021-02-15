


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

environment
@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  url = environment.apiUrlPrefix

  constructor(private http :HttpClient) { }

  get(api: any, body?: any) {
    const  fullApi =  this.url+api
      return this.http.get(fullApi, body)
    }

    post(api: any, body: any) : Observable<any>{
      const  fullApi =  this.url+api

      return this.http.post(fullApi, body)
    }
    delete(api: any, body: any) {
      const  fullApi =  this.url+api

      return this.http.delete(fullApi, body)
    }
    put(api: any, body: any) {
      const  fullApi =  this.url+api

      return this.http.put(fullApi, body)
    }
}
