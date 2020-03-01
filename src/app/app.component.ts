import {Component, OnInit} from '@angular/core';
import {TodoService, Todo} from './service/todo.service';
import {Observable} from 'rxjs';
import {LogService} from './service/log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  todos: Observable<Todo[]>;

  constructor(private todoService: TodoService,
              logService: LogService) {
  }

  ngOnInit(): void {
    this.todos = this.todoService.entities$;
    this.todoService.getAll('https://jsonplaceholder.typicode.com/todos');
  }
}
