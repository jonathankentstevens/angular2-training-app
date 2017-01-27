import {Component, OnInit} from '@angular/core';
import {TodoService} from "../todo.service";
import {Todo} from "../shared/todo";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {

  todos: Todo[] = [];
  newTodo: Todo = new Todo();

  constructor(private todoService: TodoService) {
  }

  addTodo() {
    this.todoService.put(this.newTodo);
    this.newTodo = new Todo();
  }

  removeTodo(todo: Todo) {
    this.todoService.remove(todo);
  }

  updateTask(todo: Todo, $event) {
    todo.task = $event.target.value;
    this.todoService.post(todo);
  }

  ngOnInit() {
    this.todos = this.todoService.get();
  }

}
