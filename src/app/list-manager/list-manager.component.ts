import { Component, OnInit } from '@angular/core';
import {TodoItem} from '../interfaces/todo-item';
import {TodoListService} from '../services/todo-list.service';

@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.scss']
})
export class ListManagerComponent implements OnInit {
  title = 'Todo List App';
  todoList: TodoItem[];

  constructor(private todoListService: TodoListService) { }

  ngOnInit(): void {
    this.todoList = this.todoListService.getTodoList();
  }
  addItem(title: string): void {
    this.todoListService.addItem({ title });
  }
  removeItem(item): void {
    this.todoListService.deleteItem(item);
  }
  updateItem(item, changes): void {
    this.todoListService.updateItem(item, changes);
  }
}
