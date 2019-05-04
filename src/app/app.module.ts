import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UsersService } from './services/users.service';

@NgModule({
  declarations: [
    AppComponent,
    ListUsersComponent,
    NavBarComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
