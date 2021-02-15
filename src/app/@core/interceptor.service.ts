import { HttpEvent, HttpHandler, HttpRequest ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService  implements InterceptorService{

  constructor() { }
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const userData = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${userData}`,

    });
    const req1 = httpRequest.clone({ headers });

    console.log("user", userData);
    // console.log(httpRequest);
    // console.log(req1);


    return next.handle(req1);
  }}
