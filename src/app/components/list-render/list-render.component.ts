import { Component, OnInit } from '@angular/core';
import { People } from 'src/app/People';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent implements OnInit {
  peoples: People[] = [];

  peopleDetails = '';

  constructor(private listService: ListService) {
    this.getPeople();
  }

  ngOnInit(): void {}

  showAge(people: People) {
    this.peopleDetails = `The people ${people.name} have ${people.age} years old`;
  }

  removePeople(people: People) {
    this.peoples = this.peoples.filter((a) => people.name !== a.name);
    this.listService.remove(people.id).subscribe();
  }
  getPeople(): void {
    this.listService.getAll().subscribe((people) => {
      this.peoples = people;
    });
  }
}
