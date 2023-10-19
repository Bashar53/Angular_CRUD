import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './data/data.component';
import { ApirequestComponent } from './apirequest/apirequest.component';

const routes: Routes = [
  {
    path:'',
    component:DataComponent
  },

  {
    path:'api',
    component:ApirequestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
