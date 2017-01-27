import {Injectable} from '@angular/core';
import {Todo} from './shared/todo'

@Injectable()
export class TodoService {
  todos: Todo[] = [];

  constructor() {
  }

  get() {
    return this.todos;
  }

  put(todo:Todo) {
    this.todos.push(todo);
  }

  post(todo:Todo) {
    this.remove(todo)
    this.put(todo);
  }

  remove(todo:Todo) {
    let index = this.todos.indexOf(todo, 0);
    if (index > -1) {
      this.todos.splice(index, 1)
    }
  }

  toggleTodoComplete(todo:Todo) {
    todo.completed = !todo.completed
    return this.post(todo);
  }
}


