import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.scss']
})
export class AddTaskFormComponent implements OnInit {

  task: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addTask(inputValue: string){
    this.task.push(inputValue);
  }

}
