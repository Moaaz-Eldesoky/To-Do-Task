import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddTaskComponent } from './add-task/add-task.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AddTaskComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'To-Do-Task';
  backgroundColor = 'grey';
  updateBgColor(color: string) {
    this.backgroundColor = color;
    console.log('bgColoris' + this.backgroundColor);
  }
}
