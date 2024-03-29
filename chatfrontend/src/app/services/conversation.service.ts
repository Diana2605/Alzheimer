import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ConversationService {

  constructor(private http: HttpClient) { }

  public sendMessage(message: any) : Observable<any>{
    return this.http.post(`${environment.API_URL}/interaction`, message);
  }
}
