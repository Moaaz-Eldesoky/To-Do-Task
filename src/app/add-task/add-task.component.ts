import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { TasksListComponent } from '../tasks-list/tasks-list.component';
import { Task } from '../interfaces/task-interface';

@Component({
  selector: 'app-add-task',
  imports: [CommonModule, TasksListComponent],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent implements OnInit {
  tasks: Task[] = [];
  id_counter: number = 0;
  currentDateTime!: string;
  colorsList = ['grey', 'light', 'dark'];
  @Output() appColor = new EventEmitter<string>();
  selectedColor: string = 'grey';

  constructor() {}

  ngOnInit() {
    this.updateDateTime();
  }

  updateDateTime() {
    const now = new Date();
    this.currentDateTime = now.toLocaleString(); // Formats date and time based on locale
  }

  addTask(e: { value: string }) {
    this.tasks.push({ id: this.id_counter, title: e.value, completed: false });
    this.id_counter++;
    console.log('tasks from parent' + JSON.stringify(this.tasks));
  }

  onTaskUpdated(updatedTasks: Task[]) {
    this.tasks = updatedTasks;
    console.log('Updated tasks in parent:', updatedTasks);
  }

  changeColor(color: string) {
    this.appColor.emit(color);
    this.selectedColor = color;
    console.log(this.selectedColor);
  }
}
