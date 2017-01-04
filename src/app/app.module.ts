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

@NgModule({
  declarations: [
    AppComponent,
    NavmenuComponent,
    PostComponent,
    TodoComponent,
    UserComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    MaterialModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
