import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClarityModule } from '@clr/angular';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './components/form/form.component';
import { InputComponent } from './components/input/input.component';
import { StarComponent } from './components/star/star.component';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddInputBtnComponent } from './components/add-input-btn/add-input-btn.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormdesignComponent } from './components/formdesign/formdesign.component';
import { SubcriptionlistComponent } from './components/subcriptionlist/subcriptionlist.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    InputComponent,
    StarComponent,
    LoginComponent,
    AddInputBtnComponent,
    RegisterComponent,
    DashboardComponent,
    FormdesignComponent,
    SubcriptionlistComponent,
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    NgxStarRatingModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
