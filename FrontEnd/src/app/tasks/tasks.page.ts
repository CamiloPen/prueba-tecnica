import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonLabel, IonList, IonItem, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ToDoList } from '../servises/to-do-list';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
  standalone: true,
  imports: [IonLabel, IonList, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class TasksPage implements OnInit {

  tasks: any[] = [];

  constructor(private api: ToDoList) {}

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    const token = localStorage.getItem("token");

    this.api.getTasks(token!).subscribe((res: any) => {
      this.tasks = res;
    });
  }

}
