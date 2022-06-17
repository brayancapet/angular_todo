import { Injectable } from '@angular/core';
import { Task } from './Task';


@Injectable({
  providedIn: 'root'
})
export class TaskManagerService {

  tasks: Task[] = [
    { 
      id: 0,
      contenu: 'Learn to code'
    },
    {
      id: 1,
      contenu: 'Practice combat sport'
    },
    {
      id: 2,
      contenu: 'Play video games'
    },
    {
      id: 3,
      contenu: 'Listen to music'
    },
    {
      id: 4,
      contenu: 'Clean my appartment'
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
