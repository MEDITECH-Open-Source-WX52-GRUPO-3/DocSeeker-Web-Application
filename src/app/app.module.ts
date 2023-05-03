import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import {FormsModule} from "@angular/forms";
import { DashboardComponent } from './views/patients/dashboard/dashboard.component';

@NgModule({
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
    DashboardComponent
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
    NgOptimizedImage
  ],
  providers: [SourcesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
