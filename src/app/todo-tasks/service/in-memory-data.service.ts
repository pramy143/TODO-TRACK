import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Task } from '../model/task-model';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const tasks = [
      {
        id: 1,
        subject: 'This is my 1 task',
        assignedTo: 'Pradeep',
        assignedDate: '10/02/2020',
        description: 'find the details regarding my first assignment.',
        taskBelongsTo: 'G',
        comments: 'find the details regarding my first assignment.',
        createdBy: 'Pradeep',
        createdDate: '10/02/2020'
      },
      {
        id: 2,
        subject: 'This is my 2 task',
        assignedTo:'Pradeep',
        assignedDate:'10/02/2020',
        description:'find the details regarding my first assignment.',
        taskBelongsTo:'G',
        comments:'find the details regarding my first assignment.',
        createdBy: 'Pradeep',
        createdDate: '10/02/2020'
      },
      {
        id: 3,
        subject: 'This is my 3 task',
        assignedTo:'Pradeep',
        assignedDate:'10/02/2020',
        description:'find the details regarding my first assignment.',
        taskBelongsTo:'G',
        comments:'find the details regarding my first assignment.',
        createdBy: 'Pradeep',
        createdDate: '10/02/2020'
      }
    ];
    return {tasks};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(tasks: Task[]): number {
    return tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 1;
  }
}
