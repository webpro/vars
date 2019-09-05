import { Component } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CRUDComponent {
  prefix: string;
  people: Person[] = [
    { first: 'Hans', last: 'Emil' },
    { first: 'Max', last: 'Mustermann' },
    { first: 'Roman', last: 'Tisch' }
  ];

  first = '';
  last = '';

  i = 0;

  constructor() {}

  select(selected: string) {
    this.i = Number(selected);
  }

  create() {
    this.people.push({ first: this.first, last: this.last });
  }

  update() {
    this.people[this.i] = { first: this.first, last: this.last };
  }

  delete() {
    this.people.splice(this.i, 1);
  }
}

interface Person {
  first: string;
  last: string;
}

// Filter the names whose last start with the entered prefix
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'prefixFilter'
})
export class PrefixFilterPipe implements PipeTransform {
  transform(people: Person[], prefix: string): any[] {
    if (!people) return [];
    if (!prefix) return people;
    prefix = prefix.toLowerCase();
    return people.filter(person => {
      const name = `${person.last}, ${person.first}`;
      return name.toLowerCase().startsWith(prefix);
    });
  }
}
