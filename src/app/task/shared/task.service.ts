import { Injectable } from '@angular/core';

import { Task } from './';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  listAll(): Task[] {
    const tasks = localStorage['tasks'];
    return tasks ? JSON.parse(tasks) : [];
  }

  add(task: Task): void {
    const tasks = this.listAll();
    task.id = new Date().getTime();
    tasks.push(task);
    localStorage['tasks'] = JSON.stringify(tasks);
  }

  findById(id: number): Task {
    const tasks = this.listAll();
    return tasks.find(task => task.id === id);
  }

  edit(task: Task): void {
    const tasks = this.listAll();
    tasks.forEach((obj, index, objs) => {
      if(task.id === obj.id) objs[index] = task;
    });
    localStorage['tasks'] = JSON.stringify(tasks);
  }

  delete(id: number): void {
    let tasks = this.listAll();
    tasks = tasks.filter(task => task.id !== id);
    localStorage['tasks'] = JSON.stringify(tasks);
  }

  changeStatus(id: number): void {
    const tasks = this.listAll();
    tasks.forEach((obj, index, objs) => {
      if(id === obj.id) objs[index].done = !obj.done;
    });
    localStorage['tasks'] = JSON.stringify(tasks);
  }
}
