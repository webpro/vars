import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  template: `
    <h1>Angular</h1>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private titleService: Title) {}
  ngOnInit() {
    this.titleService.setTitle('Angular');
  }
}
