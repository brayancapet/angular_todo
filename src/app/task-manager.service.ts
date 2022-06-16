import { Injectable } from '@angular/core';
import { tasks } from './mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskManagerService {

  constructor() { }

  getTasks(){
    return tasks;
  }

}
