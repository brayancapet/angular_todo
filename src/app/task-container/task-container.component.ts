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
   this.tasks = this.taskManager.getTasks();
  }

  clear(){
    this.tasks = this.taskManager.clearTasks();
  }

  deleteTask(id: number){
    for(let i = 0; i < this.tasks.length; i++){
      id === this.tasks[i].id ? this.tasks.splice(i, 1) : console.log('Keep looking');
    }
  }

  toggleCheck(id: number){
    for(let i = 0; i < this.tasks.length; i++){
      if(id == this.tasks[i].id){
        this.tasks[i].fait == false ? this.tasks[i].fait = true : this.tasks[i].fait = false;
        console.log(this.tasks[i]);
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
    return this.tasks;
    
  }


}
