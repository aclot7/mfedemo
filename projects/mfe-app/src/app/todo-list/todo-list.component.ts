import { Component } from '@angular/core';
import { AuthService } from 'projects/libs/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  nameobs: Observable<string> = this.authService.getName();
  constructor(private authService: AuthService) {
  }

}
