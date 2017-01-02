import { AppComponent } from './app.component';
import { Routes, RouterModule } from "@angular/router";

import { TodoComponent } from './todo/todo.component';
import { PostComponent } from './posts/post.component';

const routes: Routes = [
    { path: '', redirectTo: 'appcomponent', pathMatch: 'full' },
  { path: 'posts', component: PostComponent },
  { path: 'todos', component: TodoComponent },
];

export const routing = RouterModule.forRoot(routes);