import { Component, OnInit } from '@angular/core';
import { People } from 'src/app/People';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent implements OnInit {
  peoples: People[] = [
    { name: 'Joel', type: 'Developer', age: 39 },
    { name: 'Mirela', type: 'Enfermeira', age: 26 },
    { name: 'Geovania', type: 'Padeira', age: 41 },
    { name: 'Deivan', type: 'Otário-Zé Mané', age: 24 },
  ];

  peopleDetails = '';

  constructor() {}

  ngOnInit(): void {}

  showAge(people: People) {
    this.peopleDetails = `The people ${people.name} have ${people.age} years old`;
  }
}
