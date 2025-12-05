import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonAvatar, IonCard, IonCardContent, IonInput, IonList, IonButton, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ToDoList } from '../servises/to-do-list';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonAvatar, IonCard, IonCardContent, RouterLink, IonInput, IonList, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class RegisterPage implements OnInit {
  newUser = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  }

  
  errorMessage = "";

  constructor(private api: ToDoList, private router: Router) {}

  register(){
    this.errorMessage = "";

    if (!this.newUser.firstName || !this.newUser.lastName || !this.newUser.email || !this.newUser.password) {
      this.errorMessage = "Todos los campos son obligatorios.";
      return;
    }

    this.api.register(this.newUser).subscribe({
      next: (res: any) => {
        this.router.navigate(['/main']);
        this.newUser = {
          firstName: "",
          lastName: "",
          email: "",
          password: ""
        }
      },
    error: (err) => {
      console.log(err);
      this.errorMessage = err.error?.message || "El correo ya esta en uso";
    }
    });
  }

  ngOnInit() {
  }

}
