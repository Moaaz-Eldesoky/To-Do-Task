import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddTaskComponent } from './add-task/add-task.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AddTaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'To-Do-Task';
}
