import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TaskManagerService {

tasks = [
    'Learn to code',
    'Practice combat sport',
    'Play video games',
    'Listen to music',
    'Clean my appartment '
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
