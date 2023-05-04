import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./views/home/home.component";
import {LogInComponent} from "./views/patients/log-in/log-in.component";
import {DashboardComponent} from "./views/patients/dashboard/dashboard.component";
import {ListDoctorsComponent} from "./views/patients/list-doctors/list-doctors.component";
import {DoctorProfileComponent} from "./views/patients/doctor-profile/doctor-profile.component";
import {DoctorReviewsComponent} from "./views/patients/doctor-reviews/doctor-reviews.component";
import {NewReviewToDoctorComponent} from "./views/patients/new-review-to-doctor/new-review-to-doctor.component";
import {ListNewsComponent} from "./views/patients/list-news/list-news.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'patientsLogIn', component: LogInComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'listDoctors', component: ListDoctorsComponent },
  { path: 'listNews', component: ListNewsComponent },
  { path: 'doctor/:id', component: DoctorProfileComponent },
  { path: 'reviewsDoctor/:id', component: DoctorReviewsComponent },
  { path: 'newReview/:id', component: NewReviewToDoctorComponent }
  //{ path: 'listCards', component: }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
