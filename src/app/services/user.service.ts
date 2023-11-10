import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl: string

  private headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*')

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/users'
  }

  public findAll() {
    console.log(this.http.get<User[]>(this.usersUrl))
    console.log('headers', this.headers)

    return this.http.get<User[]>(this.usersUrl)
  }

  public save(user: User) {
    return this.http.post<User>(this.usersUrl, user)
  }

}
