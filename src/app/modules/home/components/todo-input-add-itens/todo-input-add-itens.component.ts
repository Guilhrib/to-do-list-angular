import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent implements OnInit {

  @Output() public emitTaskListItem = new EventEmitter()

  public addItemTask: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  public submitItemList(): void {
    this.addItemTask = this.addItemTask.trim()
    if (this.addItemTask) {
      this.emitTaskListItem.emit(this.addItemTask)
      this.addItemTask = ''
    }
  }
}
