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
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    InputComponent,
    StarComponent,
    AddInputBtnComponent,
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    NgxStarRatingModule,
    FormsModule,
    ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
