import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./views/home/home.component";
import {LogInComponent} from "./views/patients/log-in/log-in.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'patientsLogIn', component: LogInComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
