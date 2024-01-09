import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list.component';
import { RouterModule } from '@angular/router';
import { AuthServiceModule } from 'shared-services';



@NgModule({
  declarations: [
    TodoListComponent
  ],
  providers: [],

  imports: [
    CommonModule,
    AuthServiceModule.forRoot(),
    RouterModule.forChild([
      {
        path: '',
        component: TodoListComponent
      }
    ])
  ]
})
export class TodoListModule { }
