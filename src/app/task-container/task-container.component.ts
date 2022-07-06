import { Component, OnInit } from '@angular/core';
import { TaskManagerService } from '../task-manager.service';
import { Task } from '../Task';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-task-container',
  templateUrl: './task-container.component.html',
  styleUrls: ['./task-container.component.scss']
})
export class TaskContainerComponent implements OnInit {

  tasks: Task[] = [];

  selectedTask: Task = {
    id: 0,
    contenu: '',
    fait: false,
    importance: '',
    onHold: false
  };

  pokemon_gif: string[] = [
    '../../assets/gif/animated-charizard.gif',
    '../../assets/gif/blastoise.gif',
    '../../assets/gif/lokhlass.gif',
    '../../assets/gif/magicarp.gif',
    '../../assets/gif/mew.gif',
    '../../assets/gif/evoli.gif',
    '../../assets/gif/ours.gif',
    '../../assets/gif/plante.gif',
    '../../assets/gif/poing.gif',
    '../../assets/gif/glali.gif',
    '../../assets/gif/scizor.gif',
    '../../assets/gif/froslass.gif',
    '../../assets/gif/abra.gif',
    '../../assets/gif/tyranocif.gif',
    '../../assets/gif/dialga.gif',
    '../../assets/gif/groudon.gif',
    '../../assets/gif/palkia.gif',
    '../../assets/gif/suicune.gif',
    '../../assets/gif/ninetales.gif',
    '../../assets/gif/zoroark.gif',
    '../../assets/gif/megaLucario.gif',
    '../../assets/gif/boreas.gif',
    '../../assets/gif/arceus.gif',
    '../../assets/gif/deoxys.gif',
    '../../assets/gif/deoxys2.gif',
    '../../assets/gif/darkrai.gif',
    '../../assets/gif/giratina.gif',
    '../../assets/gif/carchacroc.gif',
    '../../assets/gif/yveltal.gif',
    '../../assets/gif/libegon.gif'
  ];

  selectedPokemonGif = '';


  nightMode: boolean = false;

  constructor(private taskManager: TaskManagerService, private translate: TranslateService) { }

  ngOnInit() {
    this.getTasks();
    this.getNightMode();
    this.randomPokemon();
  }

  getTasks(){
  this.tasks = JSON.parse(localStorage.getItem('tasks') || '{}');
  }

  getNightMode(){
    this.nightMode = JSON.parse(localStorage.getItem('nightMode') || '{}');
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
    this.saveToLocalStorage();
  }

  addTask(newTask: string){
    let temporaryTask = {
      id: 0,
      contenu: '',
      fait: false,
      importance: '',
      onHold: false
    };

    if(this.tasks.length !== 0){
      temporaryTask.id = this.tasks.slice(-1)[0].id + 1;
      let newTaskSplit = newTask.split(' ');
      temporaryTask.importance = newTaskSplit.slice(-1)[0];
      temporaryTask.contenu = newTaskSplit.slice(0, -1).join(' ');
      temporaryTask.fait = false;
      console.log(temporaryTask);
    } else {
      console.log('liste vide');
      temporaryTask.id = 1;
      let newTaskSplit = newTask.split(' ');
      temporaryTask.importance = newTaskSplit.slice(-1)[0];
      temporaryTask.contenu = newTaskSplit.slice(0, -1).join(' ');
      temporaryTask.fait = false;
      console.log(temporaryTask);
    }


    if(temporaryTask.importance == 'importance'){
      alert("Veuillez définir l'importance de la tâche s'il vous plaît.");
    }
    if(temporaryTask.contenu == ''){
      alert("La tâche ne peut être vide. Veuillez la remplir s'il vous plaît.");
    }

    if(temporaryTask.importance == "l'importanza"){
      alert("Seleziona un'importanza");
    }

    console.log(temporaryTask.importance);
    if(temporaryTask.importance !== 'importance' && temporaryTask.contenu !== '' && temporaryTask.importance !== "l'importanza" ){
      this.tasks.push(temporaryTask);
      this.saveToLocalStorage();
      return this.tasks;
    } 

  }

  saveToLocalStorage(){
    let taskStorage = this.tasks;
    localStorage.setItem('tasks', JSON.stringify(taskStorage)); 
  }


  generateModalText(id: number){
    for(let i = 0; i < this.tasks.length; i++){
      id == this.tasks[i].id ? this.selectedTask = this.tasks[i] : console.log("je n'ai pas trouvé la tâche");
    }
    console.log(this.selectedTask);
  }

  sauvegardeModal(){
    this.saveToLocalStorage();
  }

  stateChange(){
    if(this.nightMode == false){
      this.nightMode = true;
      localStorage.setItem('nightMode', JSON.stringify(this.nightMode));
    } else if(this.nightMode == true){
      this.nightMode = false;
      localStorage.setItem('nightMode', JSON.stringify(this.nightMode));
    }
  }

  switchOnHoldStatus(tache: Task){
    if(tache.onHold == true){
      tache.onHold = false;
    } else if(tache.onHold == false){
      tache.onHold = true;
    }
    console.log(tache.onHold);
    this.saveToLocalStorage();
  }

  randomPokemon(){
   let random = Math.floor(Math.random() * (this.pokemon_gif.length - 1));

   console.log(random);
   this.selectedPokemonGif = this.pokemon_gif[random];
   console.log(this.selectedPokemonGif);
  }

  changeImportance(importance: string, id: number){
    for(let i = 0; i < this.tasks.length; i++){
      id == this.tasks[i].id ? this.selectedTask.importance = importance : console.log('mistake');
    } 
    console.log(this.selectedTask);
  }

  useLanguage(language: string): void {
    this.translate.use(language);
}
}
