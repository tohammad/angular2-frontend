import { AppComponent } from './app.component';
import { Routes, RouterModule } from "@angular/router";

import { TodoComponent } from './todo/todo.component';
import { PostComponent } from './posts/post.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
    { path: '', redirectTo: 'appcomponent', pathMatch: 'full' },
  { path: 'posts', component: PostComponent },
  { path: 'users', component: UserComponent },
];

export const routing = RouterModule.forRoot(routes);