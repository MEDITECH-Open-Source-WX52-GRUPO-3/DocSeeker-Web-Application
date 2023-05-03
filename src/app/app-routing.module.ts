import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./views/home/home.component";
import {LogInComponent} from "./views/patients/log-in/log-in.component";
import {DashboardComponent} from "./views/patients/dashboard/dashboard.component";
import {ListDoctorsComponent} from "./views/patients/list-doctors/list-doctors.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'patientsLogIn', component: LogInComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'listDoctors', component: ListDoctorsComponent },
  { path: 'doctor/:id', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
