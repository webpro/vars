import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './common/nav.component';
import { HomeComponent } from './home/home.component';
import { HackerNewsComponent } from './hacker-news/hacker-news.component';
import { SummaryComponent } from './hacker-news/summary.component';
import { ItemComponent } from './hacker-news/item.component';
import { CommentComponent } from './hacker-news/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    HackerNewsComponent,
    SummaryComponent,
    ItemComponent,
    CommentComponent
  ],
  imports: [BrowserModule.withServerTransition({ appId: 'serverApp' }), AppRoutingModule, HttpClientModule],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule {}
