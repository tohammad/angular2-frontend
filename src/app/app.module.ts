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
import { SubheaderComponent } from './subheader/subheader.component';
import {AgGridModule} from 'ag-grid-ng2/main';
import { GridComponent } from './grid/grid.component';

@NgModule({
  declarations: [
    AppComponent,
    NavmenuComponent,
    PostComponent,
    TodoComponent,
    UserComponent,
    HeaderComponent,
    FooterComponent,
    SubheaderComponent,
    GridComponent,
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
