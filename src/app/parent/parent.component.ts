import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from '../child/child.component';

interface User {
  id: number;
  name: string;
  age: number;
  email: string;
}

@Component({
  selector: 'app-parent',
  standalone: true, // Make the component standalone
  imports: [CommonModule, ChildComponent], // Import CommonModule and ChildComponent
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  users: User[] = [
    { id: 1, name: 'Bibin Thomas', age: 24, email: 'bibin@gmail.com' },
    { id: 2, name: 'Laiz irfan', age: 26, email: 'laiz@gmail.com' },
    { id: 3, name: 'Kuruvila', age: 24, email: 'kuruvila@gmail.com' }
  ];

  completedUserName: string = ''; // To store the name of the user who completed the task

  onCompleteTask(userName: string) {
    this.completedUserName = userName;
  }
}
