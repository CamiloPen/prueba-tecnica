import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ToDoList {

  api = "http://localhost:4000";

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post(`${this.api}/auth/login`, { email, password });
  }

  getTasks(token: string) {
    const headers = new HttpHeaders().set("Authorization", `Bearer ${token}`);
    return this.http.get(`${this.api}/tasks`, { headers });
  }

  createTask(data: any, token: string) {
    const headers = new HttpHeaders().set("Authorization", `Bearer ${token}`);
    return this.http.post(`${this.api}/tasks`, data, { headers });
  }

  updateTask(id: number, data: any, token: string) {
    const headers = new HttpHeaders().set("Authorization", `Bearer ${token}`);
    return this.http.put(`${this.api}/tasks/${id}`, data, { headers });
  }

  deleteTask(id: number, token: string) {
    const headers = new HttpHeaders().set("Authorization", `Bearer ${token}`);
    return this.http.delete(`${this.api}/tasks/${id}`, { headers });
  }
}
