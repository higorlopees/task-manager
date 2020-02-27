import { Component, OnInit } from '@angular/core';

import { TaskService, Task } from '../shared';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  tasks: Task[];

  ngOnInit(): void {
    this.tasks = this.taskService.listAll();
  }

}
