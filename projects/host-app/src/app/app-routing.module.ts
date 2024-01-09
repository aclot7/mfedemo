import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const MFE_APP_URL = "http://localhost:4300/remoteEntry.js";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  // {
  // path: 'todo-list', 
  // loadChildren: () => {
  //   return loadRemoteModule({
  //     type: 'module',
  //     remoteEntry: MFE_APP_URL,
  //     exposedModule: "./Module"
  //   }).then(m => m.TodoListModule).catch(err => console.log(err));
  // },
  // },


  {
    path: 'todo-list',
    loadChildren: () => import('../../../mfe-app/src/app/todo-list/todo-list.module').then(m => m.TodoListModule)
  },



  // {
  //   path: 'todo-list', 
  //   loadChildren: () => {
  //     return loadRemoteModule({
  //       type: 'manifest',
  //       remoteName: "mfeApp",
  //       exposedModule: "./Module"
  //     }).then(m => m.TodoListModule).catch(err => console.log(err));
  //   },

  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routeCompArr = [HomeComponent];
