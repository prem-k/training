import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = environment.apiUrl;

  constructor(private http:HttpClient) { 

  }

  getUsers() {
    return this.http.get(this.baseUrl+ 'users?page=1&limit=10');
  }
}
