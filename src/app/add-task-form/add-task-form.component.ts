import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.scss']
})
export class AddTaskFormComponent implements OnInit {
  tasks: string[] = [];

  @Output() newTask = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  addTask(inputValue: string){
    this.newTask.emit(inputValue);
    
  }

  eraseInputValue(input: any){
    input.value = '';
  }
}
