import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { HackerNewsService } from './hacker-news.service';

@Component({
  selector: 'app-hacker-news',
  templateUrl: './hacker-news.component.html',
  styleUrls: ['./hacker-news.component.css']
})
export class HackerNewsComponent {
  public topItems;
  constructor(private hackerNewsService: HackerNewsService, private titleService: Title) {}
  ngOnInit() {
    this.titleService.setTitle('Hacker News');
    this.getTopItems(1);
  }
  getTopItems(page): void {
    this.hackerNewsService.getTopItems(page).subscribe(items => {
      this.topItems = items;
    });
  }
}
