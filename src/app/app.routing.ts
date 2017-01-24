import { AddUserComponent } from './user/add-user.component';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from "@angular/router";

import { TodoComponent } from './todo/todo.component';
import { PostComponent } from './posts/post.component';
import { UserComponent } from './user/user.component';
import { CommentComponent } from './comments/comment.component';
import { CommentFormComponent } from './comments/comment-form.component';

const routes: Routes = [
    { path: '', redirectTo: 'appcomponent', pathMatch: 'full' },
  { path: 'posts', component: PostComponent },
  { path: 'users', component: UserComponent },
  { path: 'adduser', component: AddUserComponent },
  { path: 'comments', component: CommentComponent },
  { path: 'addcomment', component: CommentFormComponent },
];

export const routing = RouterModule.forRoot(routes);