import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { StudentFormComponent } from './Components/student-form/student-form.component';
import {HttpClientModule} from '@angular/common/http';
import { AboutComponent } from './Components/about/about.component';
//import { RegisteredformComponent } from './Components/registeredform/registeredform.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StudentFormComponent,
    AboutComponent,
    // RegisteredformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
