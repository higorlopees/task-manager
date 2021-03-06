import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TaskService, TaskDoneDirective } from './shared';
import { ListTaskComponent } from './list';
import { AddTaskComponent } from './add';
import { EditTaskComponent } from './edit';

@NgModule({
  declarations: [ListTaskComponent, AddTaskComponent, EditTaskComponent, TaskDoneDirective],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    TaskService
  ]
})
export class TaskModule { }
