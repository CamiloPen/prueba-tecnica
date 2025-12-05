import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonCard, IonCardContent, IonInput, IonItem, IonButton, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { RouterLink, Router } from '@angular/router';
import { ToDoList } from '../servises/to-do-list';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  standalone: true,
  imports: [ RouterLink, IonCard, IonCardContent, IonInput, IonItem, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class MainPage implements OnInit {
  email = '';
  password = '';
  errorMessage = "";

  constructor(private api: ToDoList, private router: Router) {}


login() {
  this.errorMessage = ""; 

  if (!this.email || !this.password) {
    this.errorMessage = "Todos los campos son obligatorios.";
    return;
  }

  this.api.login(this.email, this.password).subscribe({
    next: (res: any) => {
      localStorage.setItem("token", res.token);
      this.router.navigate(['/tasks']);
    },
    error: (err) => {
      console.log(err);
      this.errorMessage = err.error?.message || "Credenciales incorrectas";
    }
  });
}

  ngOnInit() {
  }

}
