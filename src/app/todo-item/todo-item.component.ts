import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoItem } from './../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  //HTML d'une ligne : checkbox + texte + bouton supp
  template: `
  <div class="todo-item" [ngClass]="{'todo-complete': item.completed}">
      <input type="checkbox" class="todo-checkbox" (click)="completeItem()"/>
      <div class="todo-title">
        {{ item.title }}
        <button class="btn btn-supp" (click)="removeItem()"> X </button>
      </div>
    </div>


  <!--
    <div class="todo-item">
      <input type="checkbox" class="todo-checkbox " (click)="completeItem()"   required minlength="4"/>
      <span class="todo-title" [ngClass]="{'todo-complete': item.completed}">
        {{ item.title }}
      </span>

      <button class="btn btn-supp" (click)="removeItem()"> X </button>
    </div>
    --->
  `,
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() item: TodoItem;
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter();
  @Output() update: EventEmitter<any> = new EventEmitter();
  isComplete: boolean = false;
  constructor() { }
  ngOnInit() {
  }

  // si une tache est cochée
 completeItem() {
  this.update.emit({
  item: this.item,
  changes: {completed: !this.item.completed}
   });
}

//completeItem() {
//this.isComplete = !this.isComplete;
//}

//effacer une tache
  removeItem() {
    this.remove.emit(this.item);
  }
}
