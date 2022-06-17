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
}
