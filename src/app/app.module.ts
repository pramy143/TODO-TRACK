import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './/todo-tasks/service/in-memory-data.service';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TodoTasksComponent } from './todo-tasks/todo-tasks.component';
import { TodoTaskListComponent } from './todo-tasks/todo-task-list/todo-task-list.component';
import { TodoTaskEditComponent } from './todo-tasks/todo-task-list/todo-task-edit/todo-task-edit.component';
import { HeaderComponent } from './header/header.component';
import { VerticalMenuComponent } from './vertical-menu/vertical-menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TodoTasksComponent,
    TodoTaskListComponent,
    TodoTaskEditComponent,
    HeaderComponent,
    VerticalMenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
