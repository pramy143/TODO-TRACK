import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { TodoTasksComponent }      from './todo-tasks/todo-tasks.component';
import { TodoTaskEditComponent } from './todo-tasks/todo-task-list/todo-task-edit/todo-task-edit.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: TodoTaskEditComponent },
  { path: 'tasks', component: TodoTasksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
