import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import student from 'entity/Student';
import { StudentFormComponent } from './Components/student-form/student-form.component';
import {AboutComponent} from './Components/about/about.component'
// import { RegisteredformComponent } from './Components/registeredform/registeredform.component';
const routes: Routes = [{path:'studentform',component:StudentFormComponent},
{path:'about',component:AboutComponent},]
// {path:'registered',component:RegisteredformComponent}];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
