import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userName = 'Joel Maciel';
  userData = {
    email: 'joel@maciel.com',
    role: 'admin',
    age: 39,
  };
  title = 'course_angular';
}
