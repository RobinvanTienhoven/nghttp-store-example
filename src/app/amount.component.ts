import {Component, OnInit} from '@angular/core';
import {TodoService} from './service/todo.service';

@Component({
  selector: 'app-amount-of-todos',
  template: `<div>Amount of todo's: {{ amount }}</div>`
})
export class AmountComponent implements OnInit {
  amount = 0;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.entities$.subscribe((todos) => this.amount = todos.length);
  }
}
