import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HackerNewsComponent } from './hacker-news/hacker-news.component';
import { ItemComponent } from './hacker-news/item.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hacker-news', redirectTo: 'hacker-news/top/1', pathMatch: 'full' },
  { path: 'hacker-news/top/:page', component: HackerNewsComponent },
  { path: 'hacker-news/item/:id', component: ItemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
