import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonSelect, IonSelectOption, IonCard, IonCardContent, IonButton, IonInput, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ToDoList } from '../servises/to-do-list';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
  standalone: true,
  imports: [IonSelect, IonSelectOption, IonCard, IonCardContent, IonButton, IonInput, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class TasksPage implements OnInit {

  tasks: any[] = [];
  token: string = "";
  newTask = {
    title: "",
    description: ""
  };

  errorMessage = "";


  constructor(private api: ToDoList) { }

  ngOnInit() {
    this.token = localStorage.getItem('token') || '';
    this.loadTasks();
  }

  loadTasks() {
    this.api.getTasks(this.token!).subscribe((res: any) => {
      this.tasks = res;
      this.tasks = res.map((t: any) => ({ ...t, editing: false }));
    });
  }

  createTask() {

    if (!this.newTask.title) {
      this.errorMessage = "Olvidaste el titulo";
      return;
    }

    this.api.createTask(this.newTask, this.token!).subscribe({
      next: (res: any) => {
        this.loadTasks();
        this.newTask = { title: '', description: '' };

      }, error: (err) => {
        console.log(err);
        this.errorMessage = err.error?.message || "algo va mal";
      }
    });
  }

  onEditTask(task: any) {
    if (task.editing) {
      const data = {
        title: task.title,
        description: task.description,
        status: task.status
      };

      this.api.updateTask(task.id, data, this.token!).subscribe({
        next: () => {
          task.editing = false;
        },
        error: err => console.error("Error al actualizar", err)
      });

    } else {
      task.editing = true;
    }
  }

  deleteTask(id: number) {
    const token = localStorage.getItem("token");

    this.api.deleteTask(id, token!).subscribe(() => {
      this.loadTasks();
    });
  }

}
