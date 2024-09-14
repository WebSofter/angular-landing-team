import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponseModel } from '../models/interfaces/api';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>("https://freeapi.miniprojectideas.com/api/CodeMentor/GetAllUser")
  }
}
