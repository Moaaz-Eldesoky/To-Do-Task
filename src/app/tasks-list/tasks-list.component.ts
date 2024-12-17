import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../interfaces/task-interface';

@Component({
  selector: 'app-tasks-list',
  imports: [CommonModule],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
})
export class TasksListComponent {
  @Input() tasks: Task[] = [];
  @Output() tasksUpdated = new EventEmitter<Task[]>();
  changeStatus(task: any) {
    this.tasks.map((e) => {
      if (e.id === task.id) {
        e.completed = !e.completed;
        console.log('tasks from changeStatus' + JSON.stringify(this.tasks));
      }
    });
    this.emitUpdatedTasks();
  }
  removeTask(task: any) {
    let filterdTasks = this.tasks.filter((e) => e.id != task.id);
    this.tasks = filterdTasks;
    this.emitUpdatedTasks();
  }
  private emitUpdatedTasks() {
    this.tasksUpdated.emit(this.tasks);
  }
}
