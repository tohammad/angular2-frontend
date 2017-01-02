import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { ToDo } from './todo';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers : [TodoService]
})
export class TodoComponent implements OnInit {
    todos: ToDo[] = [];
  constructor(private todoService: TodoService) { }

  ngOnInit() {
        this.todoService.getToDos()
    .subscribe(todos => {
      this.todos = todos;
    });
  }

}
