import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

type FeedType = 'poll' | 'story' | 'job';

class Comment {
  id: number;
  level: number;
  user: string;
  time: number;
  time_ago: string;
  content: string;
  deleted: boolean;
  comments: Comment[];
}

class Item {
  id: number;
  title: string;
  points: number;
  user: string;
  time: number;
  time_ago: number;
  type: FeedType;
  url: string;
  domain: string;
  comments: Comment[];
  comments_count: number;
}

@Injectable({
  providedIn: 'root'
})
export class HackerNewsService {
  private serviceUrl = `https://node-hnapi.herokuapp.com`;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) {}

  getTopItems(page: number): any {
    const url = `${this.serviceUrl}/news?page=${page}`;
    return this.http.get(url);
  }

  getNewsItem(id: number): any {
    const url = `${this.serviceUrl}/item/${id}`;
    return this.http.get(url);
  }
}
