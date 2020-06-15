import { Component, OnInit } from '@angular/core';

import { Task } from "../model/task-model";
import { TaskService } from "../service/task.service";

@Component({
  selector: 'app-todo-task-list',
  templateUrl: './todo-task-list.component.html',
  styleUrls: ['./todo-task-list.component.css']
})
export class TodoTaskListComponent implements OnInit {
  tasks: Task[];
  closeResult: string;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks()
        .subscribe(tasks => this.tasks = tasks);
  }

  add(subject: string): void {
    subject = subject.trim();
    if (!subject) { return; }
    this.taskService.addTask({ subject } as Task)
      .subscribe(task => {
        this.tasks.push(task);
      });
  }

  delete(task: Task): void {
    this.tasks = this.tasks.filter(h => h !== task);
    this.taskService.deleteTask(task).subscribe();
  }

}
