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
      fait: false
    },
    {
      id: 2,
      contenu: 'Practice combat sport',
      fait: false
    },
    {
      id: 3,
      contenu: 'Play video games',
      fait: false
    },
    {
      id: 4,
      contenu: 'Listen to music',
      fait: false
    },
    {
      id: 5,
      contenu: 'Clean my appartment',
      fait: false
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
