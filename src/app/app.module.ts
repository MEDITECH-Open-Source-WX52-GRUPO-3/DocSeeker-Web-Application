import { BrowserModule } from '@angular/platform-browser';
import {GoPaymentComponent} from "./components/go-payment/go-payment.component";
import {PopupComponent} from "./components/popup/popup.component";
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './views/home/home.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import { LogInComponent } from './views/patients/log-in/log-in.component';
import { DashButtonComponent } from './components/dash-button/dash-button.component';
import { ProfileButtonComponent } from './components/profile-button/profile-button.component';
import {MatButtonModule} from "@angular/material/button";
import {NgOptimizedImage} from "@angular/common";
import { DoctorCardComponent } from './components/doctor-card/doctor-card.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import { ReviewComponent } from './components/review/review.component';
import {SourcesService} from "./services/sources.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {LogInCardComponent} from "./components/log-in-card/log-in-card.component";
import {MatCardModule} from "@angular/material/card";
import {MatTabsModule} from "@angular/material/tabs";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {FormsModule} from "@angular/forms";
import { DashboardComponent } from './views/patients/dashboard/dashboard.component';
import { ListDoctorsComponent } from './views/patients/list-doctors/list-doctors.component';
import { DoctorProfileComponent } from './views/patients/doctor-profile/doctor-profile.component';
import { DoctorReviewsComponent } from './views/patients/doctor-reviews/doctor-reviews.component';
import { NewReviewToDoctorComponent } from './views/patients/new-review-to-doctor/new-review-to-doctor.component';
import { NewCardComponent } from './components/new-card/new-card.component';
import { ListNewsComponent} from "./views/patients/list-news/list-news.component";
import {FlexLayoutModule} from "@angular/flex-layout";
import { MoreInfoNewsComponent } from './components/more-info-news/more-info-news.component';
import { DoctorDateComponent } from './views/patients/doctor-date/doctor-date.component';
import { PaymentComponent } from './views/patients/payment/payment.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {MatSliderModule} from "@angular/material/slider";
import { MedicalHistoryComponent } from './views/patients/medical-history/medical-history.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    LogInComponent,
    DoctorCardComponent,
    ReviewComponent,
    SidebarComponent,
    LogInCardComponent,
    ProfileButtonComponent,
    DashButtonComponent,
    DashboardComponent,
    ListDoctorsComponent,
    DoctorProfileComponent,
    DoctorReviewsComponent,
    NewReviewToDoctorComponent,
    DoctorDateComponent,
    PaymentComponent,
    GoPaymentComponent,
    PopupComponent,
    NewCardComponent,
    ListNewsComponent,
    MoreInfoNewsComponent,
    MedicalHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    HttpClientModule,
    MatListModule,
    MatSidenavModule,
    NgOptimizedImage,
    MatCheckboxModule,
    MatSliderModule,
    FlexLayoutModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [SourcesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
