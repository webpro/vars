import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  template: `
    <h1>Angular</h1>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private titleService: Title, private metaService: Meta) {}
  ngOnInit() {
    this.titleService.setTitle('Angular');
    this.metaService.updateTag({ name: 'description', content: 'VARS - Angular' });
  }
}
