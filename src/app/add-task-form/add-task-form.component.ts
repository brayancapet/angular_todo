import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.scss']
})
export class AddTaskFormComponent implements OnInit {
  tasks: string[] = [];

  @Output() newTask = new EventEmitter<string>();

  importanceType = [
    {
      nom:'négligeable', 
      value: 'negligeable'
    },
    {
      nom: 'à faire',
      value: 'a_faire'
    },
    {
      nom: 'important',
      value: 'important'
    },
    {
      nom: 'très important',
      value: 'tres_important'
    }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

  addTask(inputValue: string, importance: string){
    console.log(importance);
    this.newTask.emit(inputValue + ' ' + importance);
  }

  eraseInputValue(input: any){
    input.value = '';
  }
}
