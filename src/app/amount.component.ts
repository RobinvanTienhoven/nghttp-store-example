import {Component, OnInit} from '@angular/core';
import {TodoService, Todo} from './service/todo.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-amount-of-todos',
  template: `<div>Amount of todo's: {{ (amount | async).length }}</div>`
})
export class AmountComponent implements OnInit {
  amount: Observable<Todo[]>;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.amount = this.todoService.entities$;
  }
}
