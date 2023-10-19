import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HelloComponent } from './hello/hello.component';
import { StudentModule } from './student/student.module';
import { FormsComponent } from './student/forms/forms.component';
import { ApirequestComponent } from './student/apirequest/apirequest.component';

const routes: Routes = [

  {
path:'',
loadChildren:()=> import('./student/student.module').then((m)=>m.StudentModule)
  },
 
  {
    path:'home',
    component:HomeComponent
  },
  

  {
    path:'hello',
    component:HelloComponent
  },

  {
    path:'forms',
    component:FormsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
