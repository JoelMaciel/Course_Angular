import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Joel';
  age: number = 39;
  job: string = 'Java Developer';
  hobbies = ['Study', 'play', 'learning engles'];
  car = {
    name: 'HB20 Sedan',
    year: 2015,
  };

  constructor() {}

  ngOnInit(): void {}
}
