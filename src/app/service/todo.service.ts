import { Injectable } from '@angular/core';
import { HttpStoreService, IdentifiableEntity } from './http-store.service';
import { HttpClient } from '@angular/common/http';

export interface Todo extends IdentifiableEntity {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({ providedIn: 'root' })
export class TodoService extends HttpStoreService<Todo> {
  constructor(http: HttpClient) {
    super(http);
  }
}
