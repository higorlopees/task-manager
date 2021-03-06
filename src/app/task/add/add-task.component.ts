import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { TaskService, Task } from '../shared';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @ViewChild('taskForm', { static: true }) taskForm: NgForm;
  task: Task;

  constructor(
    private taskService: TaskService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.task = new Task();
  }

  add(): void {
    if(this.taskForm.form.valid){
      this.taskService.add(this.task);
      this.router.navigate(["/tasks"]);
    }
  }
}
