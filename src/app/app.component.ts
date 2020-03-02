import {Component, OnInit} from '@angular/core';
import {TodoService, Todo} from './service/todo.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  todos: Observable<Todo[]>;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todos = this.todoService.entities$;
    this.todoService.getAll('https://jsonplaceholder.typicode.com/todos');
  }

  remove(todo: Todo): void {
    this.todoService.removeOneFromCache(todo);
  }

}
