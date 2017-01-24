import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { routing } from './app.routing';
import { PostComponent } from './posts/post.component';
import { TodoComponent } from './todo/todo.component';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { UserComponent } from './user/user.component';
import { HttpClient } from './customrequest.options';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {AgGridModule} from 'ag-grid-ng2/main';
import { GridComponent } from './grid/grid.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { AddUserComponent } from './user/add-user.component';
import { CommentComponent } from './comments/comment.component';
import { CommentFormComponent } from './comments/comment-form.component';
import { CommentBoxComponent } from './comments/comment-box.component';
import { CommentListComponent } from './comments/comment-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavmenuComponent,
    PostComponent,
    TodoComponent,
    UserComponent,
    HeaderComponent,
    FooterComponent,
    GridComponent,
    UserdetailComponent,
    AddUserComponent,
    CommentComponent,
    CommentFormComponent,
    CommentBoxComponent,
    CommentListComponent,
  ],
  imports: [
    MaterialModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AgGridModule.withComponents([UserComponent])
    
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
