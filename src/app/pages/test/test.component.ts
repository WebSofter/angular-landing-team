import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { MockService } from '../../services/mock.service';
import { IUser, IRole } from '../../models/interfaces/user';
import { APIResponseModel } from '../../models/interfaces/api';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent implements OnInit {

  mockService = inject(MockService)

  http = inject(HttpClient)
  //constructor(private http: HttpClient) { }
  roleList: IRole[] = [];
  userList: IUser[] = [];
  ngOnInit(): void {
    this.getAllRoles()
    this.mockService.getAllUsers().subscribe({
      next: (resp: any)=> this.userList = resp.data,
      error: (e) => console.error(e),
      complete: () => console.info('users loaded')
    })
    // throw new Error('Method not implemented.');
  }

  getAllRoles() {
    this.http.get<APIResponseModel>(`${environment.apiUrl}/ClientStrive/GetAllRoles`).subscribe({
      next: (resp: APIResponseModel)=> this.roleList = resp.data,
      error: (e) => console.error(e),
      complete: () => console.info('roles loaded')
    })

    // .subscribe({complete: (resp: any)=> {
    //   this.roleList = resp.data;
    // }})
  }
  name: string = 'Some Hello';

  sayHello(msg: string) {
    alert(msg);
  }
}
