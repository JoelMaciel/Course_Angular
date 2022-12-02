import { Injectable } from '@angular/core';
import { People } from '../People';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  constructor() {}

  remove(people: People[], person: People) {
    return people.filter((a) => person.name !== a.name);
  }
}
