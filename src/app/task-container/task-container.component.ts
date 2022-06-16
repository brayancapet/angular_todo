import { Component, OnInit } from '@angular/core';
import { TaskManagerService } from '../task-manager.service';

@Component({
  selector: 'app-task-container',
  templateUrl: './task-container.component.html',
  styleUrls: ['./task-container.component.scss']
})
export class TaskContainerComponent implements OnInit {

  tasks: string[] = [];

  constructor(private taskManager: TaskManagerService) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks(){
   this.tasks = this.taskManager.getTasks();
  }

  
}
