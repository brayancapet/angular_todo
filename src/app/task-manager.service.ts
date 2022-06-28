import { Injectable } from '@angular/core';
import { Task } from './Task';


@Injectable({
  providedIn: 'root'
})
export class TaskManagerService {

  tasks: Task[] = [
    { 
      id: 1,
      contenu: 'Learn to code',
      fait: false,
      importance: ''
    },
    {
      id: 2,
      contenu: 'Practice combat sport',
      fait: false,
      importance: ''
    },
    {
      id: 3,
      contenu: 'Play video games',
      fait: false,
      importance: ''
    },
    {
      id: 4,
      contenu: 'Listen to music',
      fait: false,
      importance: ''
    },
    {
      id: 5,
      contenu: 'Clean my appartment',
      fait: false,
      importance: ''
    }
  ];

  constructor() { }

  getTasks(){
    return this.tasks;
  }

  clearTasks(){
    this.tasks = [];
    return this.tasks;
  }
}
