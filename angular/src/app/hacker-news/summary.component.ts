import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { HackerNewsService } from './hacker-news.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
  @Input() item: any;
  @Input() index: number;
}
