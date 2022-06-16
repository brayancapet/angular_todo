import { Component, OnInit } from '@angular/core';
import { TaskManagerService } from '../task-manager.service';

@Component({
  selector: 'app-action-component',
  templateUrl: './action-component.component.html',
  styleUrls: ['./action-component.component.scss']
})
export class ActionComponentComponent implements OnInit {

  tasks : string[] = [];
  constructor(private taskManager: TaskManagerService) { }

  ngOnInit(): void {
  }


}
