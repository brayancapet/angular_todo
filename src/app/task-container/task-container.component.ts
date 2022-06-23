import { Component, OnInit } from '@angular/core';
import { TaskManagerService } from '../task-manager.service';
import { Task } from '../Task';

@Component({
  selector: 'app-task-container',
  templateUrl: './task-container.component.html',
  styleUrls: ['./task-container.component.scss']
})
export class TaskContainerComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskManager: TaskManagerService) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks(){
  this.tasks = JSON.parse(localStorage.getItem('tasks') || '{}');
  }

  clear(){
    this.tasks = this.taskManager.clearTasks();
    this.saveToLocalStorage();
  }

  deleteTask(id: number){
    for(let i = 0; i < this.tasks.length; i++){
      id === this.tasks[i].id ? this.tasks.splice(i, 1) : console.log('Keep looking');
    }
    this.saveToLocalStorage();
  }

  toggleCheck(id: number){
    for(let i = 0; i < this.tasks.length; i++){
      if(id == this.tasks[i].id){
        this.tasks[i].fait == false ? this.tasks[i].fait = true : this.tasks[i].fait = false;
      } 
    }
  }

  addTask(newTask: string){

    let temporaryTask = {
      id: 0,
      contenu: '',
      fait: false
    };

    if(this.tasks.length !== 0){
      temporaryTask.id = this.tasks.slice(-1)[0].id + 1;
      temporaryTask.contenu = newTask;
      temporaryTask.fait = false;
    } else {
      console.log('liste vide');
      temporaryTask.id = 1;
      temporaryTask.contenu = newTask;
      temporaryTask.fait = false;
    }

    this.tasks.push(temporaryTask);
    this.saveToLocalStorage();
    return this.tasks;
    
    
  }

  saveToLocalStorage(){
    let taskStorage = this.tasks;
    localStorage.setItem('tasks', JSON.stringify(taskStorage)); 
  }


}
