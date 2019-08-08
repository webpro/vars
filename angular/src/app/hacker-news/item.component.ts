import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { HackerNewsService } from './hacker-news.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  private id;
  public item;
  public comments;
  constructor(
    private hackerNewsService: HackerNewsService,
    private route: ActivatedRoute,
    private titleService: Title
  ) {}
  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.getItem(this.id);
  }
  getItem(id): void {
    this.hackerNewsService.getNewsItem(id).subscribe(item => {
      this.item = item;
      this.comments = item.comments;
      this.titleService.setTitle(item.title);
    });
  }
}
