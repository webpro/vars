import { BrowserModule, Title, Meta } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './common/nav.component';
import { HomeComponent } from './home/home.component';
import { HackerNewsComponent } from './hacker-news/hacker-news.component';
import { SummaryComponent } from './hacker-news/summary.component';
import { ItemComponent } from './hacker-news/item.component';
import { CommentComponent } from './hacker-news/comment.component';
import { CRUDComponent, PrefixFilterPipe } from './crud/crud.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    HackerNewsComponent,
    SummaryComponent,
    ItemComponent,
    CommentComponent,
    CRUDComponent,
    PrefixFilterPipe
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    FormsModule
  ],
  providers: [Title, Meta],
  bootstrap: [AppComponent]
})
export class AppModule {}
