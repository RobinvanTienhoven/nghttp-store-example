import {Injectable} from '@angular/core';
import {TodoService} from './todo.service';

@Injectable({ providedIn: 'root' })
export class LogService {
  constructor(private todoService: TodoService) {
    todoService.entities$.subscribe((entities) => console.log('new Log!', entities));
  }
}
