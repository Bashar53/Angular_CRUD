import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeappComponent } from './components/employeeapp.component';
import { StudentComponent } from './components/student.component';
import { OfficerComponent } from './components/officer.component';
import { HomeComponent } from './home/home.component';
import { HelloComponent } from './hello/hello.component';
import { FormsModule } from '@angular/forms';
import { ApirequestComponent } from './student/apirequest/apirequest.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeappComponent,
    StudentComponent,
    OfficerComponent,
    HomeComponent,
    HelloComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
