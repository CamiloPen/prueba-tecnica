import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {  IonInput, IonItem, IonButton, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { ToDoList } from '../servises/to-do-list';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  standalone: true,
  imports: [ IonInput, IonItem, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class MainPage implements OnInit {
  email = '';
  password = '';

  constructor(private api: ToDoList, private router: Router) {}

  login() {
    this.api.login(this.email, this.password).subscribe((res: any) => {
      localStorage.setItem('token', res.token);
      this.router.navigate(['/tasks']);
    });
  }

  ngOnInit() {
  }

}
